import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "word_of_the_week" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"date" timestamp(3) with time zone NOT NULL,
  	"scripture_references" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "word_of_the_week_id" integer;
  CREATE INDEX IF NOT EXISTS "word_of_the_week_updated_at_idx" ON "word_of_the_week" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "word_of_the_week_created_at_idx" ON "word_of_the_week" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_word_of_the_week_fk" FOREIGN KEY ("word_of_the_week_id") REFERENCES "public"."word_of_the_week"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_word_of_the_week_id_idx" ON "payload_locked_documents_rels" USING btree ("word_of_the_week_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "word_of_the_week" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "word_of_the_week" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_word_of_the_week_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_word_of_the_week_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "word_of_the_week_id";`)
}
