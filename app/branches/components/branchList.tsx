"use client";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { paragraph, title } from "@/components/primitives";
import React from "react";
import { useAtomValue } from "jotai";
import { ShowMoreButton } from "@/app/atoms/components/showMoreButton";
import { filteredBranches } from "@/app/atoms/searchBranches";
import { BranchCard } from "./branchCard";
import { MapLocationXIcon } from "@/components/icons";

const BranchesList = () => {
  const branches = useAtomValue(filteredBranches);

  if (branches.length === 0) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center my-16 md:my-32 ">
        <MapLocationXIcon className="w-16 h-16 text-default-500" />
        <h2
          className={`!font-bold  ${title(
            { size: "xl" }
          )}`}
        >
          No Branches Found
        </h2>
        <p
          className={`text-center  ${paragraph({
            size: "md",
          })}`}
        >
          We couldn&apos;t find any branches matching your search
        </p>

      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="w-full h-full flex flex-col justify-center items-center my-16 md:my-32 ">
        <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 md:gap-8 xl:gap-10 ">
          {branches.map((branch, index) => (
            <AnimatedDivLeftRightUpDown
              direction="up"
              key={branch.locationName}
              delay={0.3 * (index + 1)}
            >
              <BranchCard branch={branch} />
            </AnimatedDivLeftRightUpDown>
          ))}
        </div>
        <ShowMoreButton filteredAtom={filteredBranches} />
      </div>
    </React.Fragment>
  );
};

export { BranchesList };
