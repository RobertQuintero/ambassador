import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { GalleryType } from "@/types/galleryType";


export async function getGalleryData(): Promise<GalleryType[]> {
  const data = await client.fetch(groq`*[_type=="gallery"]{...,
        _createdAt,
        _updatedAt,
        _id,
        title,
        description,
        date,
        "galleryImages": galleryImages[]{
            _id,
            "image": image.asset->url,
            caption,
        }
    }`);
    return data;
}