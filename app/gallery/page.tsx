import { getGalleryData } from "@/sanity/utils/sanity-gallery";
import React from "react";


export const revalidate = 1;

export default async function Gallery() {

  const Gallery = await getGalleryData();

  return (
    <React.Fragment>
        <p>Gallery</p>

    </React.Fragment>
  );
}
