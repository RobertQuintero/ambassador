import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { AnimatedLogoFull } from "@/components/animation/animatedLogo";
import { paragraph, title } from "@/components/primitives";
import { AboutType } from "@/types/about";
import { Image } from "@nextui-org/react";
import React from "react";

type introductionMissionHistoryProps = {
  introductionMissionHistory: AboutType;
};

const IntroductionMissionHistory = ({
  introductionMissionHistory,
}: introductionMissionHistoryProps) => {
  return (
    <div className="flex flex-col  mx-auto gap-14 sm:gap-16 md:gap-24 lg:gap-28 xl:gap-32 2xl:gap-64 w-full ">
      <div>
        <AnimatedDivLeftRightUpDown
          direction="up"
          className="flex flex-col justify-center items-center "
        >
          <h1
            className={`!font-bold text-default-900 text-center !text-5xl sm:!text-6xl my-4 md:my-8  ${title(
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

      {/* // Mission, Vision, History */}
      <AnimatedDivLeftRightUpDown
        direction="left"
        className="flex flex-col justify-center group relative h-full max-w-7xl "
      >
          <div className="z-10 opacity-20 group-hover:opacity-100 duration-500 group-hover:duration-500 ease-in-out group-hover:ease-in-out">
            <Image src="/bg/2.png" alt="Vision Image" />
          </div>
          <div className=" absolute self-center z-20 ml-0 group-hover:md:ml-20 group-hover:duration-300 ease-in-out group-hover:ease-in-out transition-all">
            <h2 className={`!font-bold  ${title({ size: "xxxl" })}`}>Mission</h2>
            <p
              className={`!text-default-700 ml-auto max-w-2xl pl-2 ${paragraph({
                size: "lg",
              })}`}
            >
              {introductionMissionHistory.mission}
            </p>
          </div>
      </AnimatedDivLeftRightUpDown>

      <AnimatedDivLeftRightUpDown
        direction="right"
        className="flex flex-col items-end justify-center relative h-full w-full group "
      >
          <div className="z-10 opacity-20 group-hover:opacity-100 duration-500 group-hover:duration-500 ease-in-out group-hover:ease-in-out">
            <Image src="/bg/1.png" alt="Vision Image" />
          </div>
          <div className="flex flex-col  absolute self-center z-20 mr-0 group-hover:md:mr-20 group-hover:duration-500 ease-in-out group-hover:ease-in-out transition-all">
            <h2 className={`!font-bold !ml-auto  ${title({ size: "xxxl" })}`}>Vision</h2>
            <p
              className={`!text-default-700  max-w-2xl pl-2 ${paragraph({
                size: "lg",
              })}`}
            >
              {introductionMissionHistory.vision}
            </p>
          </div>
      </AnimatedDivLeftRightUpDown>

      <AnimatedDivLeftRightUpDown
        direction="left"
        className="flex flex-col  justify-center relative h-full w-full group max-w-7xl"
      >
          <div className="z-10 opacity-20 group-hover:opacity-100 duration-500 group-hover:duration-500 ease-in-out group-hover:ease-in-out">
            <Image src="/bg/3.png" alt="Vision Image" />
          </div>
          <div className="flex flex-col absolute self-center z-20 ml-0 group-hover:md:ml-20 group-hover:duration-500 ease-in-out group-hover:ease-in-out transition-all">
            <h2 className={`!font-bold ${title({ size: "xxxl" })}`}>History</h2>
            <p
              className={`!text-default-700  max-w-2xl pl-2 ${paragraph({
                size: "lg",
              })}`}
            >
              {introductionMissionHistory.history}
            </p>
          </div>
      </AnimatedDivLeftRightUpDown>
    </div>
  );
};

export { IntroductionMissionHistory };
