import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { BranchesType } from "@/types/branchesType";


export async function getBranchesData(): Promise<BranchesType[]> {
  const data = await client.fetch(groq`*[_type=="branches"]{...,
        _createdAt,
        _updatedAt,
        _id,
        locationName,
        address,
        email,
        mobile,
        telephone,
        "socialMedia": socialMedia[]->{
            _id,
            linkType,
            url,
        }
    }`);
    return data;
}