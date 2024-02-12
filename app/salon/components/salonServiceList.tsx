"use client";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { SubServiceCard } from "@/components/card/subServiceCard";
import { paragraph, title } from "@/components/primitives";
import { SubServices } from "@/types/servicesPageType";
import React from "react";


type SalonServicesListProps = {
    subServices: SubServices[];
};

const SalonServicesList = ({subServices}: SalonServicesListProps) => {

  return (
    <React.Fragment>
      <div className="w-full h-full flex flex-col justify-center items-center my-16 md:my-32 ">
      <AnimatedDivLeftRightUpDown
        className="flex flex-col justify-center items-center my-4 md:my-8"
        direction="up"
      >
          <h2
            className={`text-default-800 !text-center ${title({
              size: "xxl",
            })}`}
          >
            Services Offered
          </h2>
          <p
            className={`!text-default-800 mb-4 text-center mx-auto !max-w-xl ${paragraph({
              size: "md",
            })}`}
          >
            Experience our salon's array of beauty services—from trendy haircuts to revitalizing facials and impeccable manicures. Relax, indulge, and let us elevate your style and well-being
          </p>
      </AnimatedDivLeftRightUpDown>
        <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 md:gap-8 xl:gap-10 ">
          {subServices.map((subService, index) => (
            <AnimatedDivLeftRightUpDown
              direction="up"
              key={subService.subServiceTitle}
              delay={0.3 * (index + 1)}
            >
              <SubServiceCard subServices={subService} />
            </AnimatedDivLeftRightUpDown>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export { SalonServicesList };
