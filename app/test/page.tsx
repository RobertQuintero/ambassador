"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxCard({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden flex flex-row relative ">
        <div className='absolute left-0 h-full w-[10%] bg-gradient-to-r from-background  to-transparent z-10'></div>
        <div className='absolute right-0 h-full w-[10%] bg-gradient-to-l from-background  to-transparent z-10'></div>
      <motion.div className="flex flex-row" style={{ x }}>
        <span className="block">{children} </span>
        <span className="block"> {children} </span>
        <span className="block">{children} </span>
        <span className="block">{children} </span>
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <section className="relative">
      <ParallaxCard baseVelocity={5}>Scroll velocity</ParallaxCard>
    </section>
  );
}