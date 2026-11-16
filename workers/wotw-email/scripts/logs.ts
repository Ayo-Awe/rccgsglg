// Prints the deployed worker's log lines. Usage: pnpm logs [hours=24]
import { execFileSync } from "node:child_process";

const hours = Number(process.argv[2] ?? 24);
const now = Date.now();
const out = execFileSync("cf", [
  "o11y", "telemetry", "query",
  "--query-id", "wotw-logs", "--view", "events", "--limit", "50",
  "--timeframe-from", String(now - hours * 3_600_000), "--timeframe-to", String(now),
  "--parameters-filters",
  JSON.stringify([{ key: "$metadata.service", operation: "eq", type: "string", value: "wotw-email" }]),
], { encoding: "utf8" });

const events: any[] = JSON.parse(out).events?.events ?? [];
if (events.length === 0) console.log(`No log lines in the last ${hours}h.`);
for (const e of events.sort((a, b) => a.timestamp - b.timestamp)) {
  const msg = e.$metadata?.message ?? JSON.stringify(e.source);
  console.log(new Date(e.timestamp).toISOString(), e.$metadata?.level ?? "", msg);
}
