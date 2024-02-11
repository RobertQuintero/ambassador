
import { getArtistPageData } from "@/sanity/utils/sanity-artists";
import React from "react";
import { ArtistSlug } from "../Components/artistSlug";

export const revalidate = 1;

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const { slug } = params;
  const artist = await getArtistPageData(slug);
  return (
    <React.Fragment>
      <ArtistSlug artist={artist} params={params} />
    </React.Fragment>
  );
}
