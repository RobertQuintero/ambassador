import { getAboutData } from "@/sanity/utils/sanity-about";
import React from "react";
import { IntroductionMissionHistory } from "./components/introductionMissionHistory";

export const revalidate = 1;

export default async function AboutPage() {

	const about = await getAboutData();

	return (
		<React.Fragment>
			<IntroductionMissionHistory introductionMissionHistory={about} />
		</React.Fragment>
	);
}
