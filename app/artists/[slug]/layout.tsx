
import { siteConfig } from '@/config/site';
import { getArtistPageData } from '@/sanity/utils/sanity-artists';
import type { Metadata, ResolvingMetadata } from 'next';
import React from "react";
type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props, parent:ResolvingMetadata): Promise<Metadata> {

	const artist = await getArtistPageData(params.slug);
	const specialties = artist.specialties
      .map((modelPref) => modelPref)
      .join(", ");
	const previousArtist = (await parent).openGraph?.images || [];

	return {
		title: artist.fullName,
		description: artist.bio,
		keywords: specialties,
		category: specialties,
		publisher: siteConfig.name,
		creator: siteConfig.name,
		// authors:
		openGraph: {
		title: artist.fullName,
		description: artist.bio,
		siteName: siteConfig.name,
		modifiedTime: artist._updatedAt,
		publishedTime: artist._createdAt,
		url: `${siteConfig.url}/artists/${artist.slug}`,
		type: 'article',
		images: [`${siteConfig.url}/artists/${artist.portfolioImages[0].image}`,...previousArtist],
		},
		twitter: {
		title: artist.fullName,
		description: artist.bio,
		images: [`${siteConfig.url}/artists/${artist.portfolioImages[0].image}`,...previousArtist],
		card: 'summary_large_image',
		},
		alternates:{
		canonical: siteConfig.url,
		},
	};

}



export default async function SlugLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
	<React.Fragment>
				{children}
    </React.Fragment>
	);
}