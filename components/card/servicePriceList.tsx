import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { ServicePriceListTable } from "@/components/card/servicePriceListTable";
import { title } from "@/components/primitives";
import { ServicesPageType } from "@/types/servicesPageType";
import React from "react";

type ServicePriceListProps = {
  service: ServicesPageType;
};

const ServicePriceList = ({ service }: ServicePriceListProps) => {
  return (
    <React.Fragment>
      <div className="mx-auto mt-16 md:mt-32 xl:mt-64 ">
        <AnimatedDivLeftRightUpDown
          className="flex flex-col justify-center items-center my-4 md:my-8"
          direction="up"
        >
          <h2
            className={`!text-center ${title({
              size: "xl",
            })}`}
          >
            Service Catalog and Prices
          </h2>
        </AnimatedDivLeftRightUpDown>
        <AnimatedDivLeftRightUpDown direction="up">
          <ServicePriceListTable servicePriceList={service.servicePriceList} />
        </AnimatedDivLeftRightUpDown>
      </div>
    </React.Fragment>
  );
};

export { ServicePriceList };
