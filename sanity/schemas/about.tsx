// about schema

import { defineField, defineType } from "sanity";

export default defineType({
    name: "about",
    title: "About",
    type: "document",
    fields: [

        defineField({
        name: "company",
        title: "Company Name",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "introduction",
        title: "Introduction",
        type: "string",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "mission",
        title: "Mission",
        type: "text",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "vision",
        title: "Vision",
        type: "text",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "history",
        title: "History",
        type: "text",
        validation: (Rule) => Rule.required(),
        }),

        // team
        defineField({
        name: "team",
        title: "Team",
        description: "Team members of the company",
        type: "array",
        of: [{ type: "reference", to: [{ type: "team" }] }],
        }),

        // testimonials
        defineField({
        name: "testimonials",
        title: "Testimonials",
        description: "Testimonials of the company",
        type: "array",
        of: [{ type: "reference", to: [{ type: "testimonials" }] }],
        }),


    ]
});