import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { ArtistsType } from "@/types/artistsType";

export async function getArtistsData(): Promise<ArtistsType[]> {
  const data = await client.fetch(groq`*[_type=="artists"]{...,
        _createdAt,
        _updatedAt,
        _id,
        fullName,
        slug,
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
            caption,
        }

    }`);
    return data;
}


export async function getArtistPageData(slug: string): Promise<ArtistsType> {
  const data = await client.fetch(groq`*[_type=="artists" && slug.current==$slug][0]{...,
        _createdAt,
        _updatedAt,
        _id,
        fullName,
        slug,
        dateOfBirth,
        gender,
        bio,
        specialties,
        "socialMedia": socialMedia[]->{
            _id,
            linkType,
            url,
        }
        "portfolioImages": portfolioImages[]{
            _id,
            "image": image.asset->url,
            caption,
        }
    }`, { slug });

    return data;
}
