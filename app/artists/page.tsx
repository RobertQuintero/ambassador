
import {getArtistsData } from "@/sanity/utils/sanity-artists";
import React from "react";
import { ArtistsList } from "./Components/artistsList";
// Revalidate every 24 hours
export const revalidate = 60 * 60 * 24;
export default async function Works() {
  const artists = await getArtistsData();

  return (
    <React.Fragment>
        <ArtistsList artists={artists} />
    </React.Fragment>
  );
}
