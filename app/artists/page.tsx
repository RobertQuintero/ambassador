
import {getArtistsData } from "@/sanity/utils/sanity-artists";
import React from "react";
import { ArtistsList } from "./Components/artistsList";
export const revalidate = 1;
export default async function Works() {
  const artists = await getArtistsData();

  return (
    <React.Fragment>
        <ArtistsList artists={artists} />
    </React.Fragment>
  );
}
