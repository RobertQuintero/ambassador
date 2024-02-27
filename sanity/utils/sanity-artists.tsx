import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { ArtistsType } from "@/types/artistsType";

export async function getArtistsData(): Promise<ArtistsType[]> {
  const data = await client.fetch(groq`*[_type=="artists"]{...,
        _createdAt,
        _updatedAt,
        _id,
        fullName,
        "slug": slug.current,
        dateOfBirth,
        "locationName": branches[]->{
            _id,
            locationName,
        },
        gender,
        bio,
        specialties,
        "portfolioImages": portfolioImages[]{
            _id,
            "image": image.asset->url,
            title,
        }

    }`);
    return data;
}


export async function getArtistPageData(slug: string): Promise<ArtistsType> {
  const data = await client.fetch(groq`*[_type=="artists" && slug.current==$slug ][0]{...,
        _createdAt,
        _updatedAt,
        _id,
        fullName,
        dateOfBirth,
        gender,
        bio,
        specialties,
        "locationName": branches[]->{
            _id,
            locationName,
        },
        "portfolioImages": portfolioImages[]{
            _id,
            "image": image.asset->url,
            title,
        },
    }`,
    { slug }
    );
    return data;
}
