"use client";
import React, { useState } from "react";
import { GalleryType } from "@/types/galleryType";
import { Image, Modal, ModalContent, ScrollShadow, useDisclosure } from "@nextui-org/react";
import { motion } from "framer-motion";
import { paragraph, title } from "@/components/primitives";
import { AnimatedCarouselGalleryAll } from "@/components/animation/animatedCarousel";

type GalleryCardProps = {
  gallery: GalleryType;
};

const GalleryCard = ({ gallery }: GalleryCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <React.Fragment>
      <div className="flex flex-col  relative max-w-xl ">
        <motion.div
          onClick={onOpen}
          className="cursor-pointer group overflow-hidden relative rounded-lg"
          whileHover={{ scale: 1.1, zIndex: 50 }}
          whileTap={{ scale: 0.9, zIndex: 50 }}
        >
          <Image
            src={gallery.galleryImages[0].image}
            alt={gallery.title}
            width={1000}
            height={1000}
            radius="sm"
            className="rounded-none"
          />
        <div className="flex flex-col items-center justify-center absolute z-10 top-[100vh] group-hover:top-0 h-full w-full bg-default-100/60 animate duration-1000 group-hover:duration-1000 ease-in-out group-hover:ease-in-out p-1  md:p-2 ">
        <div className="flex flex-col gap-2  ">
            <span
              className={`!font-semibold text-center capitalize text-default-900 ${title(
                { size: "lg" }
              )}`}
            >
              {gallery.title}
            </span>
          <ScrollShadow className={`min-h-[5rem] max-h-[10rem] ${paragraph(
                { size: "xs" }
              )}`} hideScrollBar>
              {gallery.description}
          </ScrollShadow>
          </div>
        </div>
        </motion.div>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior="inside"
          radius="sm"
          backdrop="opaque"
          classNames={{
            closeButton:
              "z-30 bg-default/50 scale-125 rounded-md hover:bg-default/70 text-default-900 hover:text-default-900",
            base: "bg-default/10 max-w-7xl shadow-none backdrop-none overflow-x-hidden hideScroll",
          }}
        >
          <ModalContent>
            <AnimatedCarouselGalleryAll gallery={gallery} />
          </ModalContent>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export { GalleryCard };
