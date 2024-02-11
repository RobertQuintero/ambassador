"use client";
import { AnimatedCarouselArtist } from "@/components/animation/animatedCarousel";
import { SocialMediaLink } from "@/components/links/socialMediaLink";
import SocialMediaShareArtists from "@/components/links/socialMediaShareArtists";
import { paragraph, title } from "@/components/primitives";
import { ArtistsType } from "@/types/artistsType";
import { MapIcon, SwatchIcon } from "@heroicons/react/24/solid";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Chip,
  Divider,
  Image,
  Link,
  Modal,
  ModalContent,
  ScrollShadow,
  useDisclosure,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

type ArtistSlugProps = {
  params: { slug: string };
  artist: ArtistsType;
};

const ArtistSlug = ({ artist, params }: ArtistSlugProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleImageClick = (index:any) => {
    setClickedIndex(index);
    onOpen();
  };
  return (
    <article className="w-full h-full ">
            <Breadcrumbs className="max-w-7xl mx-auto my-2 md:my-4">
        <BreadcrumbItem>
          <Link size="sm" color="foreground" href="/">
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link size="sm"  color="foreground" href="/artist">
            Work
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link size="sm"  color="foreground" isDisabled href="" className="capitalize">
            {artist.fullName}
          </Link>
        </BreadcrumbItem>
      </Breadcrumbs>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-10 xl:gap-20 max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <Image
            src={artist.portfolioImages[0].image}
            alt={artist.fullName}
            radius="none"
            width={500}
            height={500}
            className="h-[35vh] sm:h-[40vh] object-contain !object-center"
          />
        </div>

        <div className="flex flex-col my-4 sm:max-w-sm xl:max-w-xl gap-3 md:gap-5">
          <h1 className={`${title({ size: "xxl" })}`}>{artist.fullName}</h1>
          <ScrollShadow hideScrollBar className="w-full  max-h-[9rem] pb-1">
            <p className={` empty:hidden ${paragraph({ size: "md" })}`}>
              {artist.bio}
            </p>
          </ScrollShadow>
          {artist.locationName && artist.locationName.length > 0 ? (
            <div className="flex flex-row items-center">
              <MapIcon className="min-w-[1.25rem] h-[1.25rem] md:min-w-[1.5rem] md:min-h-[1.5rem] mr-2 text-default-700 self-start" />
              <ul className="flex flex-wrap gap-3 ">
                {artist.locationName.map((branches) => (
                  <li key={branches.locationName}>
                    <Chip
                      variant="flat"
                      radius="full"
                      color="default"
                      size="md"
                      classNames={{
                        content: "text-default-700 capitalize !font-semibold",
                      }}
                    >
                      {branches.locationName}
                    </Chip>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {artist.specialties && artist.specialties.length > 0 ? (
            <div className="flex flex-row items-center">
              <SwatchIcon className="min-w-[1.25rem] h-[1.25rem] md:min-w-[1.5rem] md:min-h-[1.5rem] mr-2 text-default-700 self-start" />
              <ul className="flex flex-wrap gap-3 ">
                {artist.specialties.map((specialty) => (
                  <li key={specialty}>
                    <Chip
                      variant="dot"
                      radius="sm"
                      color="default"
                      size="lg"
                      classNames={{
                        content: "text-default-700 capitalize !font-semibold",
                      }}
                    >
                      {specialty}
                    </Chip>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="flex flex-wrap gap-2">
            {artist.socialMedia ? (
              <SocialMediaLink socialMediaLinks={artist.socialMedia} />
            ) : null}
            <SocialMediaShareArtists socialMediaShareArtists={artist} />
          </div>
        </div>
      </div>

      <Divider orientation="horizontal" className="max-w-7xl mx-auto my-3" />
      <div className="w-full mx-auto max-w-7xl  columns-2 md:columns-3  gap-2 md:gap-3 ">
        {/* // start from 1 to avoid the first image */}
        {artist.portfolioImages.slice(1).map((image) => (
          <div
            className="flex flex-col break-inside-avoid h-auto "
            key={image.title}
          >
            <motion.div onClick={() => handleImageClick(artist.portfolioImages.indexOf(image))}
              className="break-inside-avoid-page mb-2 md:mb-3 cursor-pointer"
              whileHover={{ scale: 1.1, zIndex: 30 }}
              whileTap={{ scale: 0.9, zIndex: 50 }}
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
<Modal
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior="inside"
          radius="sm"
          backdrop="opaque"
          classNames={{
            closeButton:
              "z-30 bg-default/50 scale-125 rounded-md hover:bg-default/70 text-default-900 hover:text-default-900",
            base: "bg-transparent max-w-7xl shadow-none backdrop-none",
          }}
        >
          <ModalContent>
            <AnimatedCarouselArtist artist={artist} startIndex={clickedIndex} />
          </ModalContent>
        </Modal>
      </div>
    </article>
  );
};

export { ArtistSlug };
