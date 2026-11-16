// Talks to the site's existing Payload REST API as a dedicated bot user.
// Field names mirror collections/WordOfTheWeek.ts in the site.

export interface PayloadOptions {
  siteUrl: string;
  email: string;
  password: string;
  fetchImpl?: typeof fetch;
}

export interface NewWord {
  content: string;
  date: string; // YYYY-MM-DD
  scriptureReferences: string;
}

export type CreateResult =
  | { status: "created"; id: number | string }
  | { status: "exists"; id: number | string };

export async function createWordOfTheWeek(
  word: NewWord,
  { siteUrl, email, password, fetchImpl = fetch }: PayloadOptions,
): Promise<CreateResult> {
  const base = siteUrl.replace(/\/$/, "");

  const login = await fetchImpl(`${base}/api/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!login.ok) throw new Error(`Payload login ${login.status}: ${await login.text()}`);
  const { token } = (await login.json()) as { token?: string };
  if (!token) throw new Error("Payload login returned no token");
  const auth = { Authorization: `JWT ${token}` };

  // Noon UTC keeps the same calendar day for every viewer timezone.
  const date = `${word.date}T12:00:00.000Z`;

  // Dedupe on the calendar day so re-sent / double-forwarded emails are no-ops.
  const dayStart = `${word.date}T00:00:00.000Z`;
  const dayEnd = `${word.date}T23:59:59.999Z`;
  const q = new URLSearchParams({
    "where[date][greater_than_equal]": dayStart,
    "where[date][less_than_equal]": dayEnd,
    limit: "1",
    depth: "0",
  });
  const existing = await fetchImpl(`${base}/api/word-of-the-week?${q}`, { headers: auth });
  if (!existing.ok) throw new Error(`Payload lookup ${existing.status}: ${await existing.text()}`);
  const { docs } = (await existing.json()) as { docs: { id: number | string }[] };
  if (docs.length > 0) return { status: "exists", id: docs[0].id };

  const created = await fetchImpl(`${base}/api/word-of-the-week`, {
    method: "POST",
    headers: { ...auth, "Content-Type": "application/json" },
    body: JSON.stringify({
      content: word.content,
      date,
      scriptureReferences: word.scriptureReferences || undefined,
    }),
  });
  if (!created.ok) throw new Error(`Payload create ${created.status}: ${await created.text()}`);
  const { doc } = (await created.json()) as { doc: { id: number | string } };
  return { status: "created", id: doc.id };
}
