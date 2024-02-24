import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { AnimatedLogoFull } from "@/components/animation/animatedLogo";
import { paragraph, title } from "@/components/primitives";
import { AboutType } from "@/types/about";
import React from "react";

type HeaderAboutProps = {
  header: AboutType;
};

const HeaderAbout = ({
  header,
}: HeaderAboutProps) => {
  return (
    <div className="flex flex-col  mx-auto  w-full ">
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
            {header.introduction}
          </p>
        </AnimatedDivLeftRightUpDown>
    </div>
  );
};

export { HeaderAbout };
