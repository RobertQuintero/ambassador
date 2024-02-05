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
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "companyOrAffiliation",
            title: "Company or Affiliation",
            type: "string",
            description: "Company name or affiliation of the person giving the testimonial (optional)",
        }),

        defineField({
            name: "profession",
            title: "Profession",
            type: "string",
            description: "Profession of the person giving the testimonial (optional)",
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
    ],
});
