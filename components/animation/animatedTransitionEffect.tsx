// animatedTransitionEffect.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

function AnimatedTransitionEffect({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <React.Fragment>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-background"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-primary"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-background"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </React.Fragment>
  );
}

export { AnimatedTransitionEffect };
