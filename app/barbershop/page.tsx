import { getBarbershopPageData } from "@/sanity/utils/sanity-services-barbershop-salon-tattoo";
import React from "react";
import { BarbershopServicesList } from "./components/barbershopServiceList";
import { ServicePriceListTable } from "@/components/card/servicePriceList";
import { BarbershopServicePriceList } from "./components/barbershopServicePriceList";


export const revalidate = 1;

export default async function Barbershop() {

  const barbershop = await getBarbershopPageData();

  return (
    <React.Fragment>
        <BarbershopServicesList servicesPage={barbershop} />
        <BarbershopServicePriceList service={barbershop} />


    </React.Fragment>
  );
}
