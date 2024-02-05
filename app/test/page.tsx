import { AnimatedButtonLink, AnimatedButtonNavLink } from "@/components/animation/animatedButtonLink";
import { AnimatedLogo } from "@/components/animation/animatedLogo";
import React from "react";


export default function Test() {
	return (
		<React.Fragment>
			<div className="mt-96 w-full">
                      <div className="flex flex-col justify-center items-center gap-2 w-full">
              <AnimatedButtonLink link="/" titleLink="Work" hoverTitle="awdawdawdawdad"/>
              <AnimatedButtonLink link="/talents" titleLink="Talents" />
              <AnimatedButtonLink link="/talents/female" titleLink="Female" />
              <AnimatedButtonLink link="/talents/male" titleLink="Male" />
              <AnimatedButtonNavLink
                link="/instructors"
                titleLink="Instructors"
              />
            </div>
			</div>
		</React.Fragment>
	);
}