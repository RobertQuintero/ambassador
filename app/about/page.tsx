import { getAboutData } from "@/sanity/utils/sanity-about";
import React from "react";

export default async function AboutPage() {

	const about = await getAboutData();
	return (
		<React.Fragment>
			<p>About</p>
		</React.Fragment>
	);
}
