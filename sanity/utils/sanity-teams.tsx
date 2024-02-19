import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { TeamsType } from "@/types/teamsType";


export async function getTeamsData(): Promise<TeamsType[]> {
    const data = await client.fetch(groq`*[_type=="team"]{...,
        _createdAt,
        _updatedAt,
        _Id,
        name,
        position,
        "image": image.asset->url,

            }`);
  return data;
}
