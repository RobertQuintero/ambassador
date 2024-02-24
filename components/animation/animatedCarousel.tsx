"use client";
import React, { useState, useRef } from "react";
import { ArtistsType } from "@/types/artistsType";
import { GalleryType } from "@/types/galleryType";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Button, ScrollShadow, Image } from "@nextui-org/react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
  useDragControls,
} from "framer-motion";

type AnimatedCarouselArtistProps = {
  artist: ArtistsType;
  startIndex: number;
};

const AnimatedCarouselArtist = ({
  artist,
  startIndex,
}: AnimatedCarouselArtistProps) => {
  const [index, setIndex] = useState(startIndex);
  const dragControls = useDragControls();

  const handleSwipe = (event:any, info:any) => {
    if (info.offset.x > 50) {
      setIndex(Math.max(0, index - 1));
    } else if (info.offset.x < -50) {
      setIndex(Math.min(artist.portfolioImages.length - 1, index + 1));
    }
  };
  return (
    <React.Fragment>
      <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }} >
        <AnimatePresence>
          <div className="flex justify-center items-center w-full h-fit overflow-hidden">
            <motion.img
              key={artist.portfolioImages[index].image}
              src={artist.portfolioImages[index].image}
              alt={artist.fullName}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              width={800}
              height={800}
              className="mx-auto h-[80vh] aspect-auto object-contain"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              dragControls={dragControls}
              onDragEnd={handleSwipe}
            />
          </div>
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {index > 0 && (
            <Button
              isIconOnly
              variant="flat"
              color="default"
              radius="sm"
              size="md"
              className={`absolute inset-y-[45%] !z-50 left-0`}
              onClick={() => setIndex(index - 1)}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>
          )}
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {index + 1 < artist.portfolioImages.length && (
            <Button
              isIconOnly
              variant="flat"
              color="default"
              radius="sm"
              size="md"
              className={`absolute inset-y-[45%] !z-50 right-0`}
              onClick={() => setIndex(index + 1)}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </Button>
          )}
        </AnimatePresence>


        <ScrollShadow
          className="grid grid-flow-col relative max-w-7xl "
          orientation="horizontal"
          hideScrollBar
        >
            {artist.portfolioImages.map((image, i) => (
              <motion.button
                key={image.image}
                whileHover={{ scale: 1.1 }}
                onClick={() => setIndex(i)}
                initial={false}
                animate={i === index ? "active" : "inactive"}
                className="min-w-[14vh] min-h-[14vh] max-w-[20vh] max-h-[20vh]"
                variants={{
                  active: {
                    filter: "grayscale(0)",
                  },
                  inactive: {
                    filter: "grayscale(1)",
                  },
                }}
              >
                <Image
                  width={"auto"}
                  height={"auto"}
                  radius="none"
                  alt={image.title}
                  src={image.image}
                  className="aspect-square w-full h-full object-cover"
                />
              </motion.button>
            ))}
        </ScrollShadow>
      </MotionConfig>
    </React.Fragment>
  );
};
type AnimatedCarouselGalleryProps = {
  gallery: GalleryType;
  startIndex: number;
};

const AnimatedCarouselGallery = ({
  gallery,
  startIndex,
}: AnimatedCarouselGalleryProps) => {
  const [index, setIndex] = useState(startIndex);
  const dragControls = useDragControls();

  const handleSwipe = (event:any, info:any) => {
    if (info.offset.x > 50) {
      setIndex(Math.max(0, index - 1));
    } else if (info.offset.x < -50) {
      setIndex(Math.min(gallery.galleryImages.length - 1, index + 1));
    }
  };
  return (
    <React.Fragment>
      <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
        <AnimatePresence>
          <div className="flex justify-center items-center w-full h-fit overflow-hidden">
            <motion.img
              key={gallery.galleryImages[index].image}
              src={gallery.galleryImages[index].image}
              alt={gallery.galleryImages[index].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              width={800}
              height={800}
              className="mx-auto h-[80vh] aspect-auto object-contain"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              dragControls={dragControls}
              onDragEnd={handleSwipe}
            />
          </div>
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {index > 0 && (
            <Button
              isIconOnly
              variant="flat"
              color="default"
              radius="sm"
              size="md"
              className={`absolute inset-y-[45%] !z-50 left-0`}
              onClick={() => setIndex(index - 1)}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>
          )}
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {index + 1 < gallery.galleryImages.length && (
            <Button
              isIconOnly
              variant="flat"
              color="default"
              radius="sm"
              size="md"
              className={`absolute inset-y-[45%] !z-50 right-0`}
              onClick={() => setIndex(index + 1)}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </Button>
          )}
        </AnimatePresence>
        <ScrollShadow
          className="grid grid-flow-col relative max-w-7xl"
          orientation="horizontal"
          hideScrollBar
        >
            {gallery.galleryImages.map((image, i) => (
              <motion.button
                key={image.image}
                onClick={() => setIndex(i)}
                whileHover={{ scale: 1.1 }}
                initial={false}
                animate={i === index ? "active" : "inactive"}
                variants={{
                  active: {
                    filter: "grayscale(0)",
                  },
                  inactive: {
                    filter: "grayscale(1)",
                  },
                }}
              >
                <Image
                  width={200}
                  height={200}
                  radius="none"
                  alt={image.title}
                  src={image.image}
                  className="aspect-square object-cover"
                />
              </motion.button>
            ))}
          </ScrollShadow>
      </MotionConfig>
    </React.Fragment>
  );
};

type AnimatedCarouselProps = {
  gallery: GalleryType;
};

const AnimatedCarousel = ({ gallery }: AnimatedCarouselProps) => {
  const [index, setIndex] = useState(0);
  const dragControls = useDragControls();

  const handleSwipe = (event:any, info:any) => {
    if (info.offset.x > 50) {
      setIndex(Math.max(0, index - 1));
    } else if (info.offset.x < -50) {
      setIndex(Math.min(gallery.galleryImages.length - 1, index + 1));
    }
  return (
    <React.Fragment>
      <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
        <AnimatePresence>
          <div className="flex justify-center items-center w-full h-fit overflow-hidden">
            <motion.img
              key={gallery.galleryImages[index].image}
              src={gallery.galleryImages[index].image}
              alt={gallery.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              width={800}
              height={800}
              className="mx-auto h-[80vh] aspect-auto object-contain"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              dragControls={dragControls}
              onDragEnd={handleSwipe}
            />
          </div>
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {index > 0 && (
            <Button
              isIconOnly
              variant="flat"
              color="default"
              radius="sm"
              size="md"
              className={`absolute inset-y-[45%] !z-50 left-0`}
              onClick={() => setIndex(index - 1)}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>
          )}
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {index + 1 < gallery.galleryImages.length && (
            <Button
              isIconOnly
              variant="flat"
              color="default"
              radius="sm"
              size="md"
              className={`absolute inset-y-[45%] !z-50 right-0`}
              onClick={() => setIndex(index + 1)}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </Button>
          )}
        </AnimatePresence>
        <ScrollShadow
          className="grid grid-flow-col relative max-w-7xl  "
          orientation="horizontal"
          hideScrollBar
        >
            {gallery.galleryImages.map((image, i) => (
              <motion.button
                key={image.image}
                onClick={() => setIndex(i)}
                whileHover={{ scale: 1.1 }}
                initial={false}
                animate={i === index ? "active" : "inactive"}
                variants={{
                  active: {
                    filter: "grayscale(0)",
                  },
                  inactive: {
                    filter: "grayscale(1)",
                  },
                }}
              >
                <Image
                  width={200}
                  height={200}
                  radius="none"
                  alt={image.title}
                  src={image.image}
                  className="aspect-square object-cover"
                />
              </motion.button>
            ))}
        </ScrollShadow>
      </MotionConfig>
    </React.Fragment>
  );
};
};


type AnimatedParallaxCardProps = {
  children: React.ReactNode;
  baseVelocity: number;
  initMovement?: number;
  className?: string;
};

const AnimatedParallaxCard = ({
  className,
  children,
  baseVelocity = 100,
  initMovement,
}: AnimatedParallaxCardProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const isHovered = useRef<boolean>(false);
  const x = useTransform(baseX, (v) => `${wrap(0, -100, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    if (!isHovered.current) {
      // Check if not hovered
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    }
  });

  const handleHoverStart = () => {
    isHovered.current = true;
  };

  const handleHoverEnd = () => {
    isHovered.current = false;
  };
  return (
    <AnimatePresence>
      <div
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        className={`overflow-hidden  relative w-full  flex ${className}`}
      >
        <div className="absolute left-0 h-full w-[10%] bg-gradient-to-r from-background  to-transparent z-10"></div>
        <div className="absolute right-0 h-full w-[10%] bg-gradient-to-l from-background  to-transparent z-10"></div>
        <motion.div style={{ x }} className="flex  ">
          {children}
        </motion.div>
        <motion.div style={{ x }} className="flex  ">
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export { AnimatedCarousel, AnimatedCarouselArtist, AnimatedParallaxCard,AnimatedCarouselGallery };
