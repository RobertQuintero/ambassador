import React, { useEffect, useRef } from 'react'
import { useMotionValue, useInView, useSpring } from "framer-motion"
import { cn } from '@nextui-org/react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string; // Add className prop
  props?: any;
  color?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({color, className,props, value, duration = 2000 }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest: number) => {
      if (ref.current && Number(latest.toFixed(0)) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span className={cn("after:content-['+']  after:my-auto ",className)} {...props} ref={ref}>0</span>;
}

export  {AnimatedNumber};
