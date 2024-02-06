// services schema

import { defineField, defineType } from "sanity";

export default defineType({
  name: "barbershop",
  title: "Barbershop Page",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "title",
      title: "Barber shop Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    // services sub services
    defineField({
      name: "subServices",
      title: "Sub Services",
      description: "",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "subServiceImage",
              title: "Sub Service Logo",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "subServiceTitle",
              title: "Sub Service Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    // Gallery reference
    defineField({
      name: "gallery",
      title: "Gallery Reference",
      description: "Gallery reference",
      type: "array",
      of: [{ type: "reference", to: [{ type: "gallery" }] }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
