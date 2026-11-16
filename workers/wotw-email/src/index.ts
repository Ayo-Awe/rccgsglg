import { env } from "cloudflare:workers";
import PostalMime from "postal-mime";
import { extract } from "./extract.ts";
import { createWordOfTheWeek } from "./payload.ts";

function addressList(value: string): string[] {
  return value
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}

export default {
  async email(message, _env, ctx) {
    const allowed = addressList(env.ALLOWED_SENDERS);
    const parsed = await PostalMime.parse(message.raw);

    // The header From is the pastor even when Gmail auto-forwards; the envelope
    // From is then the forwarder. Accept either being on the allowlist.
    const senders = [message.from, parsed.from?.address ?? ""].map((s) => s.toLowerCase());
    if (!senders.some((s) => allowed.includes(s))) {
      // Never process it, but pass it to a human (e.g. Gmail's forwarding
      // confirmation). Don't bounce to unknown senders.
      console.log(JSON.stringify({ event: "forwarded_unknown_sender", senders }));
      await message.forward(env.ADMIN_EMAIL);
      return;
    }

    const text = parsed.text ?? parsed.html?.replace(/<[^>]+>/g, " ") ?? "";
    const sentAt = parsed.date ? new Date(parsed.date) : new Date();

    try {
      const word = await extract(text, sentAt, {
        apiKey: env.OPENROUTER_API_KEY,
        model: env.MODEL,
      });
      console.log(JSON.stringify({ event: "extracted", word }));

      if (!word.isWordOfTheWeek) {
        console.log(JSON.stringify({ event: "not_word_of_the_week", subject: parsed.subject }));
        return;
      }
      if (env.DRY_RUN === "true") {
        console.log(JSON.stringify({ event: "dry_run" }));
        return;
      }

      const result = await createWordOfTheWeek(word, {
        siteUrl: env.SITE_URL,
        email: env.PAYLOAD_EMAIL,
        password: env.PAYLOAD_PASSWORD,
      });
      console.log(JSON.stringify({ event: result.status, id: result.id, date: word.date }));
    } catch (err) {
      const reason = err instanceof Error ? err.message : String(err);
      console.error(JSON.stringify({ event: "failed", reason }));
      // Hand the original email back to a human so it can be posted manually.
      const headers = new Headers({ "X-WOTW-Error": reason.slice(0, 200).replace(/[\r\n]/g, " ") });
      ctx.waitUntil(message.forward(env.ADMIN_EMAIL, headers));
    }
  },
} satisfies ExportedHandler;
