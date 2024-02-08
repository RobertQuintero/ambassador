import { getGalleryData } from "@/sanity/utils/sanity-gallery";
import React from "react";
import { GalleryList } from "./components/galleryList";


export const revalidate = 1;

export default async function Gallery() {

  const Gallery = await getGalleryData();

  return (
    <React.Fragment>
        <GalleryList gallery={Gallery} />

    </React.Fragment>
  );
}
