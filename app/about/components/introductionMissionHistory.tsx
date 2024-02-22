import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
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


      <AnimatedDivLeftRightUpDown
        direction="left"
        className="flex flex-row gap-4 md:gap-8 xl:gap-16 group justify-center  h-full max-w-7xl mx-auto"
      >
          <div className="-ml-32 md:-ml-52 xl:-ml-60  z-10 opacity-20 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:ease-in-out">
            <Image src="/bg/3.png" alt="Vision Image" />
          </div>
          <div className="  self-center z-20 ">
            <h2 className={`!font-bold  ${title({ size: "xxxl" })}`}>History</h2>
            <p
              className={`!text-default-500 ml-auto max-w-2xl pl-2 ${paragraph({
                size: "lg",
              })}`}
            >
              {introductionMissionHistory.history}
            </p>
          </div>
      </AnimatedDivLeftRightUpDown>

      <AnimatedDivLeftRightUpDown
        direction="right"
        className="flex flex-row-reverse gap-4 md:gap-8 xl:gap-16 group justify-center  h-full max-w-7xl mx-auto"
      >
          <div className="-mr-32 md:-mr-52 xl:-mr-60  z-10 opacity-20 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:ease-in-out">
            <Image src="/bg/2.png" alt="Vision Image" />
          </div>
          <div className="  self-center flex flex-col items-end z-20 ">
            <h2 className={`!font-bold text-right  ${title({ size: "xxxl" })}`}>Vision</h2>
            <p
              className={`!text-default-500 ml-auto max-w-2xl pl-2 !text-right ${paragraph({
                size: "lg",
              })}`}
            >
              {introductionMissionHistory.vision}
            </p>
          </div>
      </AnimatedDivLeftRightUpDown>

      <AnimatedDivLeftRightUpDown
        direction="left"
        className="flex flex-row gap-4 md:gap-8 xl:gap-16 group justify-center  h-full max-w-7xl mx-auto"
      >
          <div className="-ml-32 md:-ml-52 xl:-ml-60  z-10 opacity-20 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:ease-in-out">
            <Image src="/bg/1.png" alt="Vision Image" />
          </div>
          <div className="  self-center z-20 ">
            <h2 className={`!font-bold  ${title({ size: "xxxl" })}`}>Mission</h2>
            <p
              className={`!text-default-500 ml-auto max-w-2xl pl-2 ${paragraph({
                size: "lg",
              })}`}
            >
              {introductionMissionHistory.mission}
            </p>
          </div>
      </AnimatedDivLeftRightUpDown>
    </div>
  );
};

export { IntroductionMissionHistory };
