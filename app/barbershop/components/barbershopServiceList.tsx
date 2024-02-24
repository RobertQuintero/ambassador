import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { SubServiceCard } from "@/components/card/subServiceCard";
import { paragraph, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { ServicesPageType } from "@/types/servicesPageType";
import React from "react";

type BarbershopServicesListProps = {
  servicesPage: ServicesPageType;
};

const BarbershopServicesList = ({
  servicesPage,
}: BarbershopServicesListProps) => {

  return (
    <React.Fragment>
      <AnimatedDivLeftRightUpDown
        className="flex flex-col justify-center items-center "
        direction="up"
      >
        <h1
          className={`!font-bold text-center !text-5xl sm:!text-6xl my-4 md:my-6 ${title(
            { size: "xxxl" }
          )}`}
        >
          {siteConfig.name} Barbershop
        </h1>
        <h2
          className={`!text-center my-2 ${title({
            size: "lg",
          })}`}
        >
          {servicesPage.title}
        </h2>
        <p
          className={`!text-default-500 mb-4 text-center mx-auto !max-w-xl ${paragraph(
            {
              size: "md",
            }
          )}`}
        >
          {servicesPage.description}
        </p>
      </AnimatedDivLeftRightUpDown>
      <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 md:gap-8 xl:gap-10 my4 md:my-6">
        {servicesPage.subServices.map((subService, index) => (
          <AnimatedDivLeftRightUpDown
            direction="up"
            key={subService.subServiceTitle}
            delay={0.3 * (index + 1)}
          >
            <SubServiceCard subServices={subService} />
          </AnimatedDivLeftRightUpDown>
        ))}
      </div>


    </React.Fragment>
  );
};

export { BarbershopServicesList };
