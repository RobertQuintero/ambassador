import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { ServicePriceListTable } from "@/components/card/servicePriceList";
import { title } from "@/components/primitives";
import { ServicesPageType } from "@/types/servicesPageType";
import React from "react";

type SalonServicePriceListProps = {
  service: ServicesPageType;
};

const SalonServicePriceList = ({
  service,
}: SalonServicePriceListProps) => {
  return (
    <React.Fragment>
      <div className="mx-auto my-16 md:my-32 xl:my-64 ">
      <AnimatedDivLeftRightUpDown
        className="flex flex-col justify-center items-center my-4 md:my-8"
        direction="up"
      >
          <h2
            className={`text-default-800 !text-center ${title({
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

export { SalonServicePriceList };
