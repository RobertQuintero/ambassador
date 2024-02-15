import { getBarbershopPageData } from "@/sanity/utils/sanity-services-barbershop-salon-tattoo";
import React from "react";
import { BarbershopServicesList } from "./components/barbershopServiceList";
import { ServicePriceList } from "@/components/card/servicePriceList";
export const revalidate = 1;

export default async function Barbershop() {
  const barbershop = await getBarbershopPageData();

  return (
    <React.Fragment>
      <BarbershopServicesList servicesPage={barbershop} />
      <ServicePriceList service={barbershop} />
    </React.Fragment>
  );
}
