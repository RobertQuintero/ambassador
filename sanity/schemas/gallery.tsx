// talents or model schema

import { defineField, defineType } from "sanity";


export default defineType({
    name: "gallery",
    title: "Gallery",
    type: "document",
    fields: [
        defineField({
        name: "galleryTitle",
        title: "Gallery Title",
        type: "string",
        description: "Enter the title of your gallery",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
            source: "galleryTitle",
            maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "galleryDescription",
        title: "Gallery Description",
        type: "text",
        description: "Enter a short description of your gallery",
        validation: (Rule) => Rule.required(),
        }),

        defineField({
        name: "galleryDate",
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
                            title: "Title",
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