// Sends a fixture to the local dev server as an inbound email.
// Usage: DRY_RUN=true pnpm dev   (in another terminal; omit DRY_RUN to really post)
//        pnpm send [fixture-file] [from-address]
import { readFileSync } from "node:fs";

const file = process.argv[2] ?? "test/fixtures/2026-11-12-email.txt";
const from = process.argv[3] ?? "ogbeernestprince@yahoo.com";
const to = "wotw@saxreeds.ng";
const port = process.env.PORT ?? "5173";

const body = readFileSync(file, "utf8").replace(/\r?\n/g, "\r\n");
const raw = [
  `From: Ernest Ogbe <${from}>`,
  `To: ${to}`,
  `Subject: Word of God for the Week`,
  `Date: ${new Date().toUTCString()}`,
  `Message-ID: <${crypto.randomUUID()}@local.test>`,
  `MIME-Version: 1.0`,
  `Content-Type: text/plain; charset=utf-8`,
  `Content-Transfer-Encoding: 8bit`,
  ``,
  body,
].join("\r\n");

const url = new URL(`http://localhost:${port}/cdn-cgi/local/email`);
url.searchParams.set("from", from);
url.searchParams.set("to", to);
const res = await fetch(url, { method: "POST", body: raw });
console.log(res.status, await res.text());
