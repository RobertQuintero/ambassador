import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { AboutType } from "@/types/about";

export async function getAboutData(): Promise<AboutType> {
  const data = await client.fetch(groq`*[_type=="about"][0]{...,
        _createdAt,
        _updatedAt,
        _id,
        company,
        introduction,
        mission,
        vision,
        history,
        "testimonials": testimonials[]->{
            "image": image.asset->url,
            fullName,
            date,
            testimonial,
            url,
        },
        "products": products[]->{
            "image": image.asset->url,
            brandName,
        },
    }`);
  return data;
}

