"use client";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { paragraph, title } from "@/components/primitives";
import React from "react";
import { useAtomValue } from "jotai";
import { ShowMoreButton } from "@/app/atoms/components/showMoreButton";
import { AnimatedLogoFull } from "@/components/animation/animatedLogo";
import { filteredBranches } from "@/app/atoms/searchBranches";
import { BranchCard } from "./branchCard";

const BranchesList = () => {
  const branches = useAtomValue(filteredBranches);
  return (
    <React.Fragment>
      <AnimatedLogoFull className="w-64 sm:w-80 h-fit mx-auto" />
      <AnimatedDivLeftRightUpDown
        className="flex flex-col justify-center items-center"
        direction="up"
      >
        <h1
          className={`!font-bold text-default-900 text-center !text-5xl sm:!text-6xl my-4 md:my-6 ${title(
            { size: "xxxl" }
          )}`}
        >
          Testimonials
        </h1>
      </AnimatedDivLeftRightUpDown>
      <div className="w-full h-full flex flex-col justify-center items-center my-16 md:my-32 ">
        <div className="max-w-7xl mx-auto columns-1 gap-4 md:gap-8 xl:gap-10 sm:columns-2 lg:columns-3 ">
          {branches.map((branch, index) => (
            <div
              className="flex flex-col break-inside-avoid h-auto mb-4 md:mb-8 xl:mb-10"
              key={branch.locationName}
            >
              <AnimatedDivLeftRightUpDown
                className="flex flex-col break-inside-avoid-page "
                direction="up"
                delay={0.3 * (index + 1)}
              >
                <BranchCard branches={branches}/>
              </AnimatedDivLeftRightUpDown>
            </div>
          ))}
        </div>
        <ShowMoreButton filteredAtom={filteredBranches} />
      </div>
    </React.Fragment>
  );
};

export { BranchesList };
