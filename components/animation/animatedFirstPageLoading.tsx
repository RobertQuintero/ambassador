"use client";
import { motion } from "framer-motion";
import { AnimatedLogo } from "./animatedLogo";
import { useEffect, useState } from 'react';

function AnimatedFirstPageLoad() {
  const [firstVisit, setFirstVisit] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const visitedBefore = localStorage.getItem('visitedBefore');
    const now = new Date();

    if (!visitedBefore) {
      setFirstVisit(true);
      localStorage.setItem('visitedBefore', now.getTime().toString());
    } else {
      const visitedTime = new Date(parseInt(visitedBefore));
      const hoursElapsed = Math.abs(now.getTime() - visitedTime.getTime()) / 36e5; // convert milliseconds to hours
      if (hoursElapsed >= 9) {
        setFirstVisit(true);
        localStorage.setItem('visitedBefore', now.getTime().toString());
      }
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!firstVisit) {
    return null;
  }

  return (
    <motion.div
      className="flex z-50 flex-col fixed h-screen w-screen overflow-hidden bg-background top-0 bottom-0 right-0 left-0 justify-center items-center "
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }} // animate opacity based on isVisible state
      exit={{ opacity: 0 }}
      transition={{ duration: 5.5 }}
    >
      <motion.div
        className="flex justify-center items-center flex-col max-w-[10rem] md:max-w-xs lg:max-w-sm"
      >
        <AnimatedLogo/>
      </motion.div>
    </motion.div>
  );
}

export { AnimatedFirstPageLoad };