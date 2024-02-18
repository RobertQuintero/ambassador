import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import {
  AnimatedLogoFull,
} from "@/components/animation/animatedLogo";
import { paragraph, title } from "@/components/primitives";
import { AboutType } from "@/types/about";

import React from "react";

type introductionMissionHistoryProps = {
  introductionMissionHistory: AboutType;
};

const IntroductionMissionHistory = ({
  introductionMissionHistory,
}: introductionMissionHistoryProps) => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto gap-14 sm:gap-16 md:gap-24 lg:gap-28 xl:gap-32 2xl:gap-64 w-full mb-14 sm:mb-16 md:mb-24 lg:mb-28 xl:mb-32">
      <div>
        <AnimatedDivLeftRightUpDown direction="down" className="flex flex-col justify-center items-center">
        <h1
          className={`!font-bold text-default-900 text-center !text-5xl sm:!text-6xl mb-4 md:mb-8 ${title(
            { size: "xxxl" }
          )}`}
        >
          About Us
        </h1>
          <AnimatedLogoFull
            delay={2}
            className=" h-[45vh] w-full mx-auto "
            classNameStroke="fill-black dark:!fill-white  stroke-[6px]"
          />
        </AnimatedDivLeftRightUpDown>
        <AnimatedDivLeftRightUpDown direction="up" delay={1}>
          <p
            className={`!text-default-500 text-center mx-auto max-w-3xl ${paragraph(
              { size: "md" }
            )}`}
          >
            {introductionMissionHistory.introduction}
          </p>
        </AnimatedDivLeftRightUpDown>
      </div>

        <AnimatedDivLeftRightUpDown direction="left" delay={1}>
          <h2 className={`!font-bold   ${title({ size: "xxxl" })}`}>Mission</h2>
          <p
            className={`!text-default-500 max-w-2xl pl-2 ${paragraph({
              size: "lg",
            })}`}
          >
            {introductionMissionHistory.mission}
          </p>
        </AnimatedDivLeftRightUpDown>

        <AnimatedDivLeftRightUpDown
          direction="right"
          className="flex flex-col items-end"
        >
          <h2
            className={`!font-bold  ${title(
              { size: "xxxl" }
            )}`}
          >
            Vision
          </h2>
          <p
            className={`!text-default-500 ml-auto max-w-2xl pl-2 ${paragraph({
              size: "lg",
            })}`}
          >
            {introductionMissionHistory.vision}
          </p>
        </AnimatedDivLeftRightUpDown>


        <AnimatedDivLeftRightUpDown
          direction="left"
          className="flex flex-col "
        >
          <h2
            className={`!font-bold  ${title(
              { size: "xxxl" }
            )}`}
          >
            History
          </h2>
          <p
            className={`!text-default-500  max-w-2xl pl-2 ${paragraph({
              size: "lg",
            })}`}
          >
            {introductionMissionHistory.history}
          </p>
        </AnimatedDivLeftRightUpDown>
    </div>
  );
};

export { IntroductionMissionHistory };
