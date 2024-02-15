import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { paragraph, title } from "@/components/primitives";
import React from "react";
import { SearchBar } from "@/app/atoms/components/searchBar";
const BranchHeader = () => {

  return (
    <React.Fragment>
      <AnimatedDivLeftRightUpDown
        className="flex flex-col justify-center items-center"
        direction="up"
      >
        <h1
          className={`!font-bold text-default-900 text-center !text-5xl sm:!text-6xl my-4 md:my-6 ${title(
            { size: "xxxl" }
          )}`}
        >
          Branches List
        </h1>
        <SearchBar />
      <p           className={`text-default-500/85 text-center mt-1 ${paragraph(
            { size: "sm" }
          )}`}>Discover Ambassador Near You</p>
      </AnimatedDivLeftRightUpDown>
    </React.Fragment>
  );
};

export { BranchHeader };
