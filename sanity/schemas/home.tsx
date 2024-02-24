// home schema

import { defineField, defineType } from "sanity";

export default defineType({
    name: "home",
    title: "Home",
    type: "document",
    fields: [

        defineField({
        name: "title",
        title: "Title",
        type: "string",
        }),
        defineField({
        name: "introduction",
        title: "Introduction",
        type: "string",
        }),
        defineField({
            name: "gallery",
            title: "Image came from the gallery",
            description: "Image of the home",
            type: "reference",
            to: [{ type: "gallery" }]
        }),


    ]
});