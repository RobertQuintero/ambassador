import { getAboutData } from "@/sanity/utils/sanity-about";
import React from "react";
import { IntroductionMissionHistory } from "./components/introductionMissionHistory";
import { TestimonialsListSlideRight } from "./components/testimonialsListSlideRight";
import { getAllSubServicesData } from "@/sanity/utils/sanity-services-barbershop-salon-tattoo";
import { ServicesOffered } from "./components/servicesOffered";
export const revalidate = 1;

export default async function AboutPage() {
	const getAllSubServices = await getAllSubServicesData();
	const about = await getAboutData();

	return (
		<React.Fragment>
			<IntroductionMissionHistory introductionMissionHistory={about} />
			<ServicesOffered subServices={getAllSubServices} />
			<TestimonialsListSlideRight testimonials={about.testimonials} />

		</React.Fragment>
	);
}
