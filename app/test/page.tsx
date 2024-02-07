"use client";
import { AnimatedButtonLink, AnimatedButtonNavLink } from "@/components/animation/animatedButtonLink";
import { AnimatedFirstPageLoad } from "@/components/animation/animatedFirstPageLoading";
import { AnimatedLogo } from "@/components/animation/animatedLogo";
import { title } from "@/components/primitives";
import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";


export default function Test() {

	const MotionLink = motion(Link);

	const pathname = usePathname();
	return (
		<React.Fragment>
			<div className="mt-96 w-full">


					<AnimatedButtonNavLink link="/salon" titleLink="Test" />
			</div>


      {/* <AnimatedLogo /> */}

		</React.Fragment>
	);
}