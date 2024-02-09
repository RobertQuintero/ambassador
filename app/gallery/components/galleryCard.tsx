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

type GalleryCardProps = {
  gallery: GalleryType;
};

const GalleryCard = ({ gallery }: GalleryCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <React.Fragment>
      <div className="flex flex-col relative max-w-xl">
        <Card isBlurred isPressable onPress={onOpen} radius="none" className="">
          <Image
            src={gallery.galleryImages[0].image}
            alt={gallery.title}
            width={1000}
            height={1000}
            radius="none"
            className="rounded-sm"
          />
        </Card>
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
