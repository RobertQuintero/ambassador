import React, { useState } from "react";
import { GalleryType } from "@/types/galleryType";
import {
  Card,
  Image,
  Modal,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { AnimatedCarousel } from "@/components/animation/animatedCarousel";
import { motion } from "framer-motion";

type GalleryCardProps = {
  gallery: GalleryType;
};

const GalleryCard = ({ gallery }: GalleryCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <React.Fragment>
      <div className="flex flex-col relative max-w-xl">
                    <motion.div onClick={onOpen}
              className="cursor-pointer"
              whileHover={{ scale: 1.1,zIndex: 50}}
              whileTap={{ scale: 0.9,zIndex: 50}}
            >
          <Image
            src={gallery.galleryImages[0].image}
            alt={gallery.title}
            width={1000}
            height={1000}
            radius="none"
            className="rounded-none"
          />
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
            base: "bg-transparent max-w-7xl shadow-none backdrop-none",
          }}
        >
          <ModalContent>
            <AnimatedCarousel gallery={gallery} />
          </ModalContent>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export { GalleryCard };
