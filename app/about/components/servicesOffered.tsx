import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { SubServiceCard } from "@/components/card/subServiceCard";
import { title } from "@/components/primitives";
import { SubServices } from "@/types/servicesPageType";
import React from "react";

type ServicesOfferedProps = {
  subServices: SubServices[];
};

const ServicesOffered = ({ subServices }: ServicesOfferedProps) => {
  return (
    <React.Fragment>
      <AnimatedDivLeftRightUpDown
        className="flex flex-col justify-center items-center"
        direction="up"
      >
        <h2
          className={`!font-bold text-default-900 text-center !text-5xl sm:!text-6xl my-4 md:my-6 ${title(
            { size: "xxxl" }
          )}`}
        >
          Services Offered
        </h2>
      </AnimatedDivLeftRightUpDown>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  w-full max-w-7xl mx-auto">
        {subServices.map((subService, index) => (
          <AnimatedDivLeftRightUpDown
            direction="right"
            delay={0.3 * (index + 1)}
            key={subService.subServiceTitle}
            className="flex min-w-max "
          >
            <SubServiceCard subServices={subService} />
          </AnimatedDivLeftRightUpDown>
        ))}
      </div>
    </React.Fragment>
  );
};

export { ServicesOffered };
