import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { ServicesPageType } from "@/types/servicesPageType";

export async function getSalonPageData(): Promise<ServicesPageType> {
  const data = await client.fetch(groq`*[_type=="salon"][0]{...,
        _createdAt,
        _updatedAt,
        _id,
        "image": image.asset->url,
        title,
        description,
        "subServices": subServices[]{
            _id,
            "subServiceImage" : subServiceImage.asset->url,
            subServiceTitle,
        },
        "gallery": gallery[]{
            _id,
            "image": image.asset->url,
            caption,
        }
    }`);
    return data;
}

export async function getTattooPageData(): Promise<ServicesPageType> {
  const data = await client.fetch(groq`*[_type=="tattoo"][0]{...,
        _createdAt,
        _updatedAt,
        _id,
        "image": image.asset->url,
        title,
        description,
        "subServices": subServices[]{
            _id,
            "subServiceImage" : subServiceImage.asset->url,
            subServiceTitle,
        },
        "gallery": gallery[]{
            _id,
            "image": image.asset->url,
            caption,
        }
    }`);
    return data;
}

export async function getBarbershopPageData(): Promise<ServicesPageType> {
  const data = await client.fetch(groq`*[_type=="barbershop"][0]{...,
        _createdAt,
        _updatedAt,
        _id,
        "image": image.asset->url,
        title,
        description,
        "subServices": subServices[]{
            _id,
            "subServiceImage" : subServiceImage.asset->url,
            subServiceTitle,
        },
        "gallery": gallery[]{
            _id,
            "image": image.asset->url,
            caption,
        }
    }`);
    return data;
}