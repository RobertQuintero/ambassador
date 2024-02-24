"use client";
import { getHomeData } from "@/sanity/utils/sanity-home";
import React from "react";
import { GalleryImages } from "../../components/card/galleryImages";
import { HeaderHome } from "./components/headerHome";


export default async function Home() {

	const home = await getHomeData();
	return (
		<React.Fragment>
		<HeaderHome home={home} />
		<GalleryImages gallery={home.gallery[0]} className=" columns-2 md:columns-3 xl:columns-4  gap-2 md:gap-3 my-4 md:my-6" />
		</React.Fragment>
	);
}
