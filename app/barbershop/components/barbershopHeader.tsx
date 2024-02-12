import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { paragraph, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { ServicesPageType } from "@/types/servicesPageType";
import React from "react";

type BarbershopHeaderProps ={
    barbershop: ServicesPageType;
}

const BarbershopHeader = ({barbershop}:BarbershopHeaderProps) => {
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
          Barbershop
        </h1>
        <p
          className={` max-w-2xl text-center mb-4 md:mb-8 ${paragraph({
            size: "md",
          })}`}
        >

Step into {siteConfig.name} and step out with confidence. Our skilled barbers blend tradition with flair, crafting styles that leave you sharp, suave, and ready to conquer. From classic cuts to modern masterpieces, trust us to sculpt your look and make a lasting impression. Your grooming journey starts here.
        </p>
      </AnimatedDivLeftRightUpDown>

    </React.Fragment>
  );
};

export {BarbershopHeader};