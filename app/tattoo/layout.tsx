import { AnimatedTattooLogo } from "@/components/animation/animatedLogo";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: siteConfig.navItemsService[3].label ,
  description: siteConfig.navItemsService[3].description,
}
export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<React.Fragment>
		<AnimatedTattooLogo className="h-[90vh] w-full fixed z-0 m-auto opacity-60"/>
		<section className="w-full h-full  px-4 sm:px-8 overflow-hidden relative z-10">
				{children}
		</section>
		</React.Fragment>
	);
}
