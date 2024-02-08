"use client";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { paragraph, title } from "@/components/primitives";
import React from "react";
import { siteConfig } from "@/config/site";
import { AnimatedLogoFull } from "@/components/animation/animatedLogo";
import { GalleryType } from "@/types/galleryType";
import { GalleryCard } from "./galleryCard";

type GalleryListProps = {
    gallery: GalleryType[];
    className?: string;
    };

const GalleryList = ({gallery}:GalleryListProps) => {
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center ">
        <h1
          className={`!font-bold text-default-900 text-center !text-5xl sm:!text-6xl my-4 md:my-6 ${title(
            { size: "xxxl" }
          )}`}
        >
          Gallery
        </h1>
      </div>


      <div className="w-full h-full flex flex-col justify-center items-center my-16 md:my-32 ">
        <div className="max-w-[1536px] mx-auto columns-1 gap-4 md:gap-8 xl:gap-10 sm:columns-2 lg:columns-3 xl:columns-4  ">
          {gallery.map((_gallery, index) => (
            <div
              className="flex flex-col break-inside-avoid h-auto mb-4 md:mb-8 xl:mb-10"
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
