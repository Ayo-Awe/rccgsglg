// Runs every fixture through the real model and prints the extraction.
// Usage: OPENROUTER_API_KEY=... pnpm try [model]
import { readdirSync, readFileSync } from "node:fs";
import { extract } from "../src/extract.ts";

const apiKey = process.env.OPENROUTER_API_KEY;
if (!apiKey) throw new Error("Set OPENROUTER_API_KEY");
const model = process.argv[2] ?? "anthropic/claude-haiku-5.5";
const dir = new URL("../test/fixtures/", import.meta.url);

for (const file of readdirSync(dir).filter((f) => f.endsWith(".txt"))) {
  const text = readFileSync(new URL(file, dir), "utf8");
  const sentAt = new Date(file.slice(0, 10));
  const word = await extract(text, sentAt, { apiKey, model });
  console.log(`\n=== ${file}\n${JSON.stringify(word, null, 2)}`);
}
