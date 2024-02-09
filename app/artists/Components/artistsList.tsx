"use client";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import React from "react";

import { ArtistCard } from "./artistsCard";
import { ArtistsType } from "@/types/artistsType";


type ArtistsListProps ={
    artists:ArtistsType[];
}

const ArtistsList = ({artists}:ArtistsListProps) => {

  return (
    <React.Fragment>
        <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 md:gap-8 xl:gap-10 ">
          {artists.map((artist, index) => (
            <AnimatedDivLeftRightUpDown
              direction="up"
              key={artist.fullName}
              delay={0.3 * (index + 1)}
            >
              <ArtistCard artists={artist}/>
            </AnimatedDivLeftRightUpDown>
          ))}
        </div>
    </React.Fragment>
  );
};

export { ArtistsList };
