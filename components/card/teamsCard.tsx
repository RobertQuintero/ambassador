import { SocialMediaLink } from "@/components/links/socialMediaLink";
import { paragraph, title } from "@/components/primitives";
import { TeamsType } from "@/types/teamsType";
import React from "react";
import { Image } from "@nextui-org/react";
type TeamCardProps = {
  team: TeamsType;
};

const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <React.Fragment>
      <div key={team.name} className="relative group overflow-hidden ">
        <Image
          src={team.image}
          alt={team.name}
          radius="none"
          classNames={{img: "aspect-square object-cover object-top"}}
        />

        <div className="flex flex-col items-center justify-center absolute z-10 top-[100vh] group-hover:top-0 h-full w-full bg-default-100/60 animate duration-1000 group-hover:duration-1000 ease-in-out group-hover:ease-in-out  ">
          <div className="flex flex-col gap-0 md:gap-2  ">
            <span
              className={`!font-semibold text-center capitalize text-default-900 ${title(
                { size: "lg" }
              )}`}
            >
              {team.name}
            </span>
            <span
              className={`text-center uppercase font-semibold text-default-700 ${paragraph(
                { size: "md" }
              )}`}
            >
              {team.position}
            </span>
          </div>

          {team.socialMedia ? (
            <SocialMediaLink
              socialMediaLinks={team.socialMedia}
                className="mt-4"
            />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export { TeamCard };
