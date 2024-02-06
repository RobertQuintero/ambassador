import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { TestimonialsType } from "@/types/testimonialsType";

export async function getTestimonialData(): Promise<TestimonialsType[]> {
  const data = await client.fetch(groq`*[_type=="testimonials"]{...,
        _createdAt,
        _updatedAt,
        _id,
        "image": image.asset->url,
        fullName,
        testimonial,
        date,
        url,
    }`);
    return data;
}