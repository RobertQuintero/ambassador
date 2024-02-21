import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.navItems[1].label ,
  description: siteConfig.navItems[1].description,
}
export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="w-full h-full  px-4 sm:px-8 overflow-hidden relative pb-14 sm:pb-16 md:pb-24 lg:pb-28 xl:pb-32  2xl:pb-64">
				{children}
		</section>
	);
}
