// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import { openapi, redoc } from "payload-oapi";
import { s3Storage } from "@payloadcms/storage-s3";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { SermonDocuments, Sermons } from "./collections/Sermons";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Sermons, SermonDocuments],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
    migrationDir: "migrations",
    push: false,
  }),
  plugins: [
    openapi({
      openapiVersion: "3.0",
      metadata: { title: "Dev API", version: "0.0.1" },
    }),
    redoc({}),
    s3Storage({
      collections: {
        media: {
          generateFileURL: ({ filename }) => {
            return process.env.S3_PUBLIC_URL + "/" + filename;
          },
        },
        sermon_documents: {
          generateFileURL: ({ filename }) => {
            return process.env.S3_PUBLIC_URL + "/" + filename;
          },
        },
      },
      clientUploads: true,
      bucket: process.env.S3_BUCKET || "",
      config: {
        endpoint: process.env.S3_ENDPOINT || "",
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
        },
        region: process.env.S3_REGION,
      },
    }),
  ],
});
