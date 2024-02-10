"use client";
import { SocialMediaLink } from "@/components/links/socialMediaLink";
import SocialMediaShareArtists from "@/components/links/socialMediaShareArtists";
import { paragraph, title } from "@/components/primitives";
import { AgeComponent } from "@/components/time/age";
import { ArtistsType } from "@/types/artistsType";
import { Button, Chip, Divider, Image, Link, Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";

type ArtistSlugProps = {
  params: { slug: string };
  artist: ArtistsType;
};

const ArtistSlug = ({ artist, params }: ArtistSlugProps) => {
  return (
    <article className="w-full h-full ">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-10 xl:gap-20 w-full  max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full  bg-default-100 ">
          <Image
            src={artist.portfolioImages[0].image}
            alt={artist.fullName}
            radius="none"
            width={500}
            height={500}
            className="w-full  max-h-80  sm:max-h-96   xl:max-h-[36rem] object-contain !object-center"
          />
        </div>

        <div className="grid grid-cols-8  w-full  ">
          <h1 className={`col-span-8  !font-bold ${title({ size: "xxl" })}`}>
            {artist.fullName}
          </h1>
          <div className="col-span-4 flex flex-col w-full ">
            {artist.dateOfBirth ? (
              <AgeComponent
                className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Age__:__'] font-semibold ${paragraph(
                  {
                    size: "md",
                  }
                )}`}
                Date={artist.dateOfBirth}
              />
            ) : null}
          </div>
          <div className="col-span-4  flex flex-col w-full ">
            {artist.specialties && artist.specialties.length > 0 ? (
              <ul className="flex flex-col gap-3 px-2 py-2">
                {artist.specialties.map((specialty) => (
                  <li key={specialty}>
                    <Chip
                      variant="flat"
                      radius="full"
                      color="default"
                      size="md"
                      className="text-default-700 !font-semibold "
                    >
                      {specialty}
                    </Chip>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-8 w-full my-8 sm:my-12 ">
        <div className="col-span-8 sm:col-span-4 flex flex-row w-full justify-center ">
          {artist.socialMedia ? (
            <SocialMediaLink socialMediaLinks={artist.socialMedia} />
          ) : null}

          <SocialMediaShareArtists socialMediaShareArtists={artist} />
        </div>
      </div>

      <div className="w-full mx-auto max-w-7xl  columns-2 md:columns-3 gap-2 md:gap-6 xl:gap-8 ">
        {/* // start from 1 to avoid the first image */}
        {artist.portfolioImages.slice(1).map((image) => (
          <div
            className="flex flex-col break-inside-avoid h-auto "
            key={image.title}
          >
            <motion.div
              className="break-inside-avoid-page mb-2 md:mb-6 xl:mb-8"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={image.image}
                alt={artist.fullName}
                radius="none"
                width={500}
                height={500}
                className="w-full !h-fit object-contain !object-center"
                classNames={{
                  wrapper: " !h-fit",
                  img: "!h-fit ",
                  blurredImg: "!h-fit",
                  zoomedWrapper: "!h-fit",
                }}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </article>
  );
};

export { ArtistSlug };
