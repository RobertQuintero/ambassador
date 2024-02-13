"use client";
import { motion } from "framer-motion";
import { AnimatedLogoFull } from "./animatedLogo";
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
      initial={{ opacity: 1, display: "flex" }}
      animate={{ opacity: isVisible ? 1 : 0, transitionEnd: { display: isVisible ? "flex" : "none" } }} // animate opacity based on isVisible state
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <motion.div
        className="flex justify-center items-center flex-col max-w-xs lg:max-w-xl 2xl:max-w-3xl"
      >
        <AnimatedLogoFull className="h-[90vh] w-full"/>
      </motion.div>
    </motion.div>
  );
}

export { AnimatedFirstPageLoad };