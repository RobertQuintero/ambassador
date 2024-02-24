"use client";
import { getHomeData } from "@/sanity/utils/sanity-home";
import React from "react";
import { GalleryImages } from "../../components/card/galleryImages";


export default async function Home() {

	const home = await getHomeData();
	return (
		<React.Fragment>
		<GalleryImages gallery={home.gallery[0]} />
		</React.Fragment>
	);
}
