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
          className={`!font-bold text-default-900 text-center !text-5xl sm:!text-6xl my-4 md:my-6 ${title(
            { size: "xxxl" }
          )}`}
        >
          Artists
        </h1>
        <p
          className={` max-w-2xl text-center mb-4 md:mb-8 ${paragraph({
            size: "md",
          })}`}
        >
          Meet the masters of style, beauty, and ink. These artisans blend
          precision and passion, sculpting hair, enhancing beauty, and etching
          stories onto skin with flair and skill.
        </p>
      </AnimatedDivLeftRightUpDown>
      <div className="max-w-[1536px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto gap-2 md:gap-3">
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
