// Team schema

import { defineField, defineType } from "sanity";

export default defineType({
    name: "teams",
    title: "Team members",
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
        name: "name",
        title: "Full name",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "position",
        title: "Position",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "quote",
        title: "Quote",
        type: "text",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "socialMedia",
        title: "Social media",
        type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "linkType",
                  title: "Link Type",
                  type: "string",
                  options: {
                    list: ["Website", "Facebook","LinkedIn","Instagram","Twitter","Pinterest","Tiktok","Youtube", "Other"], // You can define your options here
                  },
                },
                {
                  name: "url",
                  title: "URL",
                  type: "url",
                },
              ],
            },
          ],
        }),
    ]
});