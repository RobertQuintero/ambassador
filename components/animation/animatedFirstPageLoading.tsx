// animatedFirstPageLoading.tsx
"use client"
import { motion } from "framer-motion"
import { AnimatedLogo } from "./animatedLogo"
import { useEffect, useState } from 'react'

function AnimatedFirstPageLoad({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 1000); // Change delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="flex z-50 flex-col fixed h-screen w-screen overflow-hidden bg-background top-0 bottom-0 right-0 left-0 justify-center items-center "
      animate={isPageLoaded ? { scale: 0, opacity: 1, borderRadius: '50%' } : { scale: 1, opacity: 1, borderRadius: '0%' }}
      transition={{ duration: .7, ease: [0.43, 0.13, 0.23, 0.96] }} // Change duration as needed
    >
      <motion.div
        className="flex justify-center items-center flex-col max-w-[10rem] md:max-w-xs lg:max-w-sm"

      >
        <AnimatedLogo/>
      </motion.div>
    </motion.div>
  )
}

export { AnimatedFirstPageLoad }