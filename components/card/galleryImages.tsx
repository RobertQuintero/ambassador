import {
  AnimatedCarouselGallerySpecific,
} from "@/components/animation/animatedCarousel";
import { GalleryType } from "@/types/galleryType";
import { Modal, ModalContent, useDisclosure, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { AnimatedDivLeftRightUpDown } from "../animation/animatedDiv";

type GalleryImagesProps = {
  gallery: GalleryType;
  className?: string;
};

const GalleryImages = ({className, gallery }: GalleryImagesProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleImageClick = (index: any) => {
    setClickedIndex(index);
    onOpen();
  };
  return (
    <React.Fragment>
      <div className={`w-full mx-auto ${className}`}>
        {/* // start from 1 to avoid the first image */}
        {gallery.galleryImages.map((image,index) => (
          <AnimatedDivLeftRightUpDown
            className="flex flex-col break-inside-avoid h-auto "
            key={image.image}
            direction="up"
            delay={index * 0.3}
          >
            <motion.div
              onClick={() =>
                handleImageClick(gallery.galleryImages.indexOf(image))
              }
              className="break-inside-avoid-page mb-2 md:mb-3 cursor-pointer"
              whileHover={{ scale: 1.05, zIndex: 30 }}
              whileTap={{ scale: 0.9, zIndex: 50 }}
            >
              <Image
                src={image.image}
                alt={image.title}
                radius="none"
                className="w-full !h-fit object-contain !object-center"
                classNames={{
                  img: "!h-fit ",
                }}
              />
            </motion.div>
          </AnimatedDivLeftRightUpDown>
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
            <AnimatedCarouselGallerySpecific
              gallery={gallery}
              startIndex={clickedIndex}
            />
          </ModalContent>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export { GalleryImages };
