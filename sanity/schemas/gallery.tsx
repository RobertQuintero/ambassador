// talents or model schema

import { defineField, defineType } from "sanity";


export default defineType({
    name: "gallery",
    title: "Gallery",
    type: "document",
    fields: [
        defineField({
        name: "title",
        title: "Gallery Title",
        type: "string",
        description: "Enter the title of your gallery",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "description",
        title: "Gallery Description",
        type: "text",
        description: "Enter a short description of your gallery",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "date",
        title: "Gallery Date",
        type: "date",
        description: "Enter the date of your gallery",
        validation: (Rule) => Rule.required(),
        }),

        // Gallery images
        defineField({
            name: "galleryImages",
            title: "Gallery Images",
            description: "Upload your Gallery images here",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            title: "title",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: {
                                hotspot: true,
                            },
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                },
            ],
        validation: (Rule) => Rule.required(),
        }),



    ]
});