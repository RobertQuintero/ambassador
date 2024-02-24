// Barbershop schema

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
    // services price list
    defineField({
      name: "servicePriceList",
      title: "Service Price List",
      description: "",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "promoPrice",
              title: "Promo Price",
              description:
                "If there is a promo price the Price Title will be strike through and the promo price will be shown",
              type: "number",
            }),
            defineField({
              name: "priceTitle",
              title: "Price Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "servicePrice",
              title: "Service Price",
              type: "number",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "freeService",
              title: "Free Service",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        },
      ],
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
    // Get all gallery images
    defineField({
      name: "gallery",
      title: "Gallery Reference",
      description: "Gallery reference",
      type: "reference",
      to: [{ type: "gallery" }],
    }),
  ],
});
