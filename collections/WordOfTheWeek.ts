import type { CollectionConfig } from "payload";

export const WordOfTheWeek: CollectionConfig = {
  slug: "word-of-the-week",
  admin: {
    useAsTitle: "date",
    description:
      "Manage weekly inspirational words and messages displayed to website visitors.",
    defaultColumns: ["date", "content"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "content",
      type: "textarea",
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
