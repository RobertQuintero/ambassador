// product schema
import { defineField, defineType } from "sanity";

export default defineType({
    name: "products",
    title: "Products We Use",
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
            name: "brandName",
            title: "Product Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
    ],
});
