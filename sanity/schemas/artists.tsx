// Instructors schema

import { defineField, defineType } from "sanity";

export default defineType({
  name: "artists",
  title: "Artists",
  type: "document",
  fields: [
    // Personal Info
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      description: "Enter your full name (e.g. John Doe)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "This will be used to generate a unique URL for your profile",
      validation: (Rule) => Rule.required(),
      options: {
        source: "fullName",
        maxLength: 96,
      },
    }),
    defineField({
      name: "branches",
      title: "Branch",
      description: "Branch where you work",
      type: "array",
      of: [{ type: "reference", to: [{ type: "branches" }] }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "dateOfBirth",
      title: "Date of Birth",
      type: "date",
    }),

    defineField({
      name: "gender",
      title: "Gender",
      type: "string",
    }),

    defineField({
      name: "bio",
      title: "some bio",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),

    // Specialties:
    defineField({
      name: "specialties",
      title: "Specialties",
      description:
        "Areas of expertise (e.g., Barbering, Hair Styling, Makeup Artistry)",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "socialMedia",
      title: "Social Media",
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
                list: [
                  "Website",
                  "Facebook",
                  "LinkedIn",
                  "Instagram",
                  "Twitter",
                  "Pinterest",
                  "Tiktok",
                  "Youtube",
                  "Phone",
                  "Email",
                  "Other",
                ], // You can define your options here
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
      validation: (Rule) => Rule.required(),
    }),
    // Portfolio
    defineField({
      name: "portfolioImages",
      title: "Portfolio or work samples",
      description: "Upload your portfolio images",
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


  ],
});
