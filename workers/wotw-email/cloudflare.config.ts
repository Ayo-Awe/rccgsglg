import { bindings, defineConfig, triggers } from "cf/config";
import * as entrypoint from "./src/index.ts" with { type: "cf-worker" };

// Evaluated in Node by the cf CLI; declared here to keep Node types out of the Worker.
declare const process: { env: Record<string, string | undefined> };

export default defineConfig({
  accountId: "e6322093d1f69758ccb8b0fa78b21c9b",
  worker: {
    name: "wotw-email",
    compatibilityDate: "2026-11-10",
    entrypoint,
    observability: { enabled: true },
    workersDev: false, // email-only Worker, no public HTTP URL
    triggers: [triggers.email({ addresses: ["wotw@saxreeds.ng"] })],
    env: {
      SITE_URL: bindings.text("https://rccgsglg.org.uk"),
      MODEL: bindings.text("anthropic/claude-haiku-5.5"),
      // Comma-separated. Include the pastor and anyone whose inbox auto-forwards.
      ALLOWED_SENDERS: bindings.text("ogbeernestprince@yahoo.com,pupoawe@gmail.com"),
      // Must be a verified Email Routing destination address.
      ADMIN_EMAIL: bindings.text("pupoawe@gmail.com"),
      // Live by default. Deploy a log-only version with: DRY_RUN=true cf deploy
      DRY_RUN: bindings.text(process.env.DRY_RUN === "true" ? "true" : "false"),
      OPENROUTER_API_KEY: bindings.secret(),
      PAYLOAD_EMAIL: bindings.secret(),
      PAYLOAD_PASSWORD: bindings.secret(),
    },
  },
});
