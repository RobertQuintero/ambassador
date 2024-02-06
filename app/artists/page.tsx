
import {getArtistsData } from "@/sanity/utils/sanity-artist";
import React from "react";


export const revalidate = 1;

export default async function Works() {

  const artists = await getArtistsData();
  return (
    <React.Fragment>
        <p>Works</p>
    </React.Fragment>
  );
}
