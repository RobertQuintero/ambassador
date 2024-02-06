// testimonials schema
import { defineField, defineType } from "sanity";

export default defineType({
    name: "testimonials",
    title: "Testimonials",
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
            name: "fullName",
            title: "Full Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "testimonial",
            title: "Testimonial",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "date",
            title: "Testimonial Date",
            type: "date",
            description: "Date when the testimonial was given",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "url",
            title: "URL Link of testimonial",
            type: "url",
            validation: (Rule) => Rule.required(),
        }),
    ],
});
