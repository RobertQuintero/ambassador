import { getAboutData } from "@/sanity/utils/sanity-about";
import React from "react";
import { IntroductionMissionHistory } from "./components/introductionMissionHistory";
import { TestimonialsListSlideRight } from "./components/testimonialsListSlideRight";
import { getTeamsData } from "@/sanity/utils/sanity-teams";
import TeamsList from "./components/teamsList";
import { HeaderAbout } from "./components/headerAbout";
import { ProductsList } from "./components/productsList";

// Revalidate the data every 7 days
export const revalidate =  60 * 60 * 24 * 7;

export default async function AboutPage() {
	const about = await getAboutData();
	const teams = await getTeamsData();

	return (
		<React.Fragment>
			<HeaderAbout header={about} />
			<TestimonialsListSlideRight testimonials={about.testimonials} />
			<IntroductionMissionHistory introductionMissionHistory={about} />
			<TeamsList teams={teams} />
			<ProductsList products={about.products} />

		</React.Fragment>
	);
}
