import type { CollectionConfig } from "payload";

export const Sermons: CollectionConfig = {
  slug: "sermons",
  admin: {
    useAsTitle: "title",
    description:
      "A collection of sermons containing titles, documents, and dates. This collection is designed to organize and display sermon details.",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "document",
      type: "upload",
      required: true,
      relationTo: "sermon_documents",
    },
    {
      name: "date",
      type: "date",
      required: true,
      defaultValue: () => new Date(),
    },
  ],
};

export const SermonDocuments: CollectionConfig = {
  slug: "sermon_documents",
  admin: {
    hidden: true,
  },
  fields: [],
  access: {
    read: () => true,
  },
  upload: {
    mimeTypes: [
      "application/msword", // .doc, .dot
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template", // .dotx
      "application/pdf",
    ],
  },
};
