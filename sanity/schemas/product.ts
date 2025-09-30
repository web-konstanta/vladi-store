import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Товар",
  type: "document",
  fields: [
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
      name: "description",
      title: "Описание",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "descriptionEn",
      title: "Описание (English)",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "image",
      title: "Изображение",
      type: "image",
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "composition",
      title: "Состав",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1)
    }),
    defineField({
      name: "compositionEn",
      title: "Состав (English)",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1)
    }),
    defineField({
      name: "sizes",
      title: "Доступные размеры",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1)
    }),
    defineField({
      name: "weight",
      title: "Вес",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "weightEn",
      title: "Вес (English)",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "products",
      title: "Варианты товара",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Название варианта",
              type: "string",
              validation: (Rule) => Rule.required()
            },
            {
              name: "image",
              title: "Изображение варианта",
              type: "image",
              options: {
                hotspot: true
              },
              validation: (Rule) => Rule.required()
            }
          ]
        }
      ]
    }),
    defineField({
      name: "subCategoryId",
      title: "ID подкатегории",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "updatedAt",
      title: "Дата обновления",
      type: "datetime",
      initialValue: () => new Date().toISOString()
    })
  ],
  preview: {
    select: {
      title: "title",
      media: "image"
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title || "Без названия"
      };
    }
  },
  orderings: [
    {
      title: "Название А-Я",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }]
    },
    {
      title: "Дата обновления",
      name: "updatedAtDesc",
      by: [{ field: "updatedAt", direction: "desc" }]
    }
  ]
});
