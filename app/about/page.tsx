import { getAboutData } from "@/sanity/utils/sanity-about";
import React from "react";
import { IntroductionMissionHistory } from "./components/introductionMissionHistory";
import { TestimonialsListSlideRight } from "./components/testimonialsListSlideRight";
import Teams from "@/sanity/schemas/teams";
import { getTeamsData } from "@/sanity/utils/sanity-teams";
import TeamsList from "./components/teamsList";
import { HeaderAbout } from "./components/header";

export const revalidate = 1;

export default async function AboutPage() {
	const about = await getAboutData();
	const teams = await getTeamsData();

	return (
		<React.Fragment>
			<HeaderAbout header={about} />
			<TestimonialsListSlideRight testimonials={about.testimonials} />
			<IntroductionMissionHistory introductionMissionHistory={about} />
			<TeamsList teams={teams} />

		</React.Fragment>
	);
}
