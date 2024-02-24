import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { HomeType } from "@/types/homeType";


export async function getHomeData(): Promise<HomeType> {
  const data = await client.fetch(groq`*[_type=="home"][0]{...,
        _createdAt,
        _updatedAt,
        _id,
        title,
        introduction,
        "gallery": *[_type == "gallery"]{
            _id,
            title,
            description,
            date,
            "galleryImages": galleryImages[]{
                _id,
                "image": image.asset->url,
                caption,
            }
        }

    }`);
  return data;
}

