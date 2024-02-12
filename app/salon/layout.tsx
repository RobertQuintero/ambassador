import { AnimatedSalonLogo } from "@/components/animation/animatedLogo";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: siteConfig.navItemsService[2].label ,
  description: siteConfig.navItemsService[2].description,
}
export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<React.Fragment>
			<AnimatedSalonLogo className="h-[80vh] w-full fixed z-0 mx-auto "/>
			<section className="w-full h-full  px-4 sm:px-8 overflow-hidden z-30">
					{children}
			</section>
		</React.Fragment>
	);
}
