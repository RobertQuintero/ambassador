"use client";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { paragraph, title } from "@/components/primitives";
import React from "react";
import { AnimatedLogoFull } from "@/components/animation/animatedLogo";
import { GalleryType } from "@/types/galleryType";
import { GalleryCard } from "./galleryCard";

type GalleryListProps = {
  gallery: GalleryType[];
  className?: string;
};

const GalleryList = ({ gallery }: GalleryListProps) => {
  return (
    <React.Fragment>
      <AnimatedDivLeftRightUpDown
        className="flex flex-col justify-center items-center "
        direction="up"
      >
        <h1
          className={`!font-bold text-center !text-5xl sm:!text-6xl my-4 md:my-6 ${title(
            { size: "xxxl" }
          )}`}
        >
          Gallery
        </h1>
        <p
          className={`!text-default-500 max-w-2xl text-center  ${paragraph({
            size: "md",
          })}`}
        >
          Discover the essence of artistry in our gallery, where <strong className="text-default-700 capitalize">barbering </strong>,
          <strong className="text-default-700 capitalize">salon</strong> transformations, and intricate <strong className="text-default-700 capitalize">tattoos</strong> converge. Each image
          embodies creativity and skill, offering inspiration for your next
          visit.
        </p>
      </AnimatedDivLeftRightUpDown>

      <div className="w-full h-full flex flex-col justify-center items-center mt-8 md:mt-16 ">
        <div className="max-w-[1536px] mx-auto columns-2 gap-2 md:gap-3  md:columns-3 xl:columns-4  ">
          {gallery.map((_gallery, index) => (
            <div
              className="flex flex-col break-inside-avoid h-auto mb-2 md:mb-3"
              key={_gallery.title}
            >
              <AnimatedDivLeftRightUpDown
                className="flex flex-col break-inside-avoid-page "
                direction="up"
                delay={0.3 * (index + 1)}
              >
                <GalleryCard gallery={_gallery} />
              </AnimatedDivLeftRightUpDown>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export { GalleryList };
