// animatedFirstPageLoading.tsx
"use client"
import { motion } from "framer-motion"
import { AnimatedLogo } from "./animatedLogo"

function AnimatedLoading({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {


  return (
    <motion.div className="flex bg-transparent  justify-center items-center "
      animate={{ scale: 1, opacity: 1, borderRadius: '50%' }}
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

export { AnimatedLoading }