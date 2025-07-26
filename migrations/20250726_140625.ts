import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "word_of_the_week" ALTER COLUMN "content" SET DATA TYPE varchar;
  ALTER TABLE "word_of_the_week" DROP COLUMN IF EXISTS "title";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "word_of_the_week" ALTER COLUMN "content" SET DATA TYPE jsonb;
  ALTER TABLE "word_of_the_week" ADD COLUMN "title" varchar NOT NULL;`)
}
