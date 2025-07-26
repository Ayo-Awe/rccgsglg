import type { CollectionConfig } from "payload";

export const WordOfTheWeek: CollectionConfig = {
  slug: "word-of-the-week",
  admin: {
    useAsTitle: "title",
    description:
      "Manage weekly inspirational words and messages displayed to website visitors.",
    defaultColumns: ["title", "date"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      admin: {
        description:
          "The title of the word/message (e.g., 'God's word for the week')",
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
      admin: {
        description: "The main inspirational message content",
      },
    },
    {
      name: "date",
      type: "date",
      required: true,
      defaultValue: () => new Date(),
      admin: {
        description: "The date this word becomes active",
      },
    },
    {
      name: "scriptureReferences",
      type: "text",
      admin: {
        description:
          "Bible verse references (e.g., 'Psalm 29:1-11; Acts11:4-24')",
      },
    },
  ],
};
