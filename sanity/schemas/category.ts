import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Категория",
  type: "document",
  fields: [
    defineField({
      name: "documentId",
      title: "ID документа",
      type: "string",
      readOnly: true,
      initialValue: () => {
        const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < 8; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        for (let i = 0; i < 4; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        for (let i = 0; i < 4; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        for (let i = 0; i < 4; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        for (let i = 0; i < 12; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "title",
      title: "Название",
      type: "string",
      validation: (Rule) => Rule.required().max(100)
    }),
    defineField({
      name: "titleEn",
      title: "Название (English)",
      type: "string",
      validation: (Rule) => Rule.required().max(100)
    }),
    defineField({
      name: "image",
      title: "Изображение категории",
      type: "image",
      options: {
        hotspot: true
      }
    })
  ],
  preview: {
    select: {
      title: "title",
      titleEn: "titleEn",
      media: "image",
      _id: "_id"
    },
    prepare(selection) {
      const { title, titleEn } = selection;
      return {
        title: title || titleEn || "Без названия",
        subtitle: `ID: ${selection._id || "Не определен"}`
      };
    }
  },
  orderings: [
    {
      title: "Название А-Я",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }]
    }
  ]
});
