import { SocialMediaLink } from "@/components/links/socialMediaLink";
import { paragraph, title } from "@/components/primitives";
import { TeamsType } from "@/types/teamsType";
import React from "react";
import { Image } from "@nextui-org/react";
import { TeamCard } from "@/components/card/teamsCard";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
type TeamTypeProps = {
  teams: TeamsType[];
};

const teamsList = ({ teams }: TeamTypeProps) => {
  return (
    <React.Fragment>
      <div className="my-14 sm:my-16 md:my-24 lg:my-28 xl:my-32 2xl:my-64 ">
        <AnimatedDivLeftRightUpDown
          className="flex flex-col justify-center my-4 md:my-6 items-center"
          direction="up"
        >
          <h2
            className={`!font-bold text-default-900 text-center !text-5xl sm:!text-6xl  ${title(
              { size: "xxxl" }
            )}`}
          >
            Meet our Team
          </h2>
          <p
            className={`!text-default-500 mx-auto max-w-2xl text-center  ${paragraph(
              { size: "lg" }
            )}`}
          >
            Our team is made up of talented and passionate individuals who are
            dedicated to making a difference in the world.
          </p>

        </AnimatedDivLeftRightUpDown>

        <div className="grid grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto rounded-md ">
          {teams.map((team, index) => (
            <AnimatedDivLeftRightUpDown
              direction="up"
              delay={0.4 * (index + 1)}
              key={team.name}
              className=""
            >
              <TeamCard team={team} />
            </AnimatedDivLeftRightUpDown>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default teamsList;
