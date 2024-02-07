"use client";
import { motion } from "framer-motion";
import { AnimatedLogo } from "./animatedLogo";
import { useEffect, useState } from 'react';

function AnimatedFirstPageLoad() {
  const [firstVisit, setFirstVisit] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    if (!localStorage.getItem('visitedBefore')) {
      setFirstVisit(true);
      localStorage.setItem('visitedBefore', 'true');
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!firstVisit || !isVisible) {
    return null;
  }
  return (
    <motion.div
      className="flex z-50 flex-col fixed h-screen w-screen overflow-hidden bg-background top-0 bottom-0 right-0 left-0 justify-center items-center "
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
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