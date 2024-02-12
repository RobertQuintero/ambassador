"use client";

import { AnimatedBarbershopLogo, AnimatedSalonLogo, AnimatedTattooLogo, } from "@/components/animation/animatedLogo";

import React from "react";


export default function Test() {


	return (
		<React.Fragment>
			<AnimatedTattooLogo className="h-[100vh] w-full"/>
			<AnimatedBarbershopLogo className="h-[100vh] w-full" />
			<AnimatedSalonLogo className="h-[100vh] w-full" />
		</React.Fragment>
	);
}