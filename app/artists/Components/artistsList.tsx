"use client";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import React from "react";

import { ArtistCard } from "./artistsCard";
import { ArtistsType } from "@/types/artistsType";
import { paragraph, title } from "@/components/primitives";

type ArtistsListProps = {
  artists: ArtistsType[];
};

const ArtistsList = ({ artists }: ArtistsListProps) => {
  return (
    <React.Fragment>
      <AnimatedDivLeftRightUpDown
        className="flex flex-col justify-center items-center"
        direction="up"
      >
        <h1
          className={`!font-bold text-center !text-5xl sm:!text-6xl my-4 md:my-6 ${title(
            { size: "xxxl" }
          )}`}
        >
          Artists
        </h1>
        <p
          className={`!text-default-500 max-w-2xl text-center  ${paragraph({
            size: "md",
          })}`}
        >
Meet skilled artisans mastering style, <strong className="text-default-700 capitalize">beauty</strong>, and <strong className="text-default-700 capitalize">ink</strong>, sculpting <strong className="text-default-700 capitalize">hair</strong>, enhancing beauty, and etching stories with flair.
        </p>
      </AnimatedDivLeftRightUpDown>
      <div className="max-w-[1536px] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4  mx-auto gap-2 md:gap-3 mt-8 md:mt-16">
        {artists.map((artist, index) => (
          <AnimatedDivLeftRightUpDown
            direction="up"
            key={artist.fullName}
            delay={0.3 * (index + 1)}
          >
            <ArtistCard artists={artist} />
          </AnimatedDivLeftRightUpDown>
        ))}
      </div>
    </React.Fragment>
  );
};

export { ArtistsList };
