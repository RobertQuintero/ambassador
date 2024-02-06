import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { ArtistType } from "@/types/artistType";


export async function getArtistsData(): Promise<ArtistType[]> {
  const data = await client.fetch(groq`*[_type=="artists"]{...,
        _createdAt,
        _updatedAt,
        _id,
        fullName,
        slug,
        dateOfBirth,
        gender,
        bio,
        specialties,

    }`);
    return data;
}


export async function getArtistPageData(slug: string): Promise<ArtistType> {
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
    }`, { slug });

    return data;
}
