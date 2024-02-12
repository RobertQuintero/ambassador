import { getBarbershopPageData } from "@/sanity/utils/sanity-services-barbershop-salon-tattoo";
import React from "react";
import { BarbershopServicesList } from "./components/barbershopServiceList";
import { BarbershopHeader } from "./components/barbershopHeader";
import { ServicePriceListTable } from "@/components/card/servicePriceList";


export const revalidate = 1;

export default async function Barbershop() {

  const barbershop = await getBarbershopPageData();

  console.log(barbershop.servicePriceList);
  return (
    <React.Fragment>
        <BarbershopHeader barbershop={barbershop}/>
        <ServicePriceListTable servicePriceList={barbershop.servicePriceList} />
        <BarbershopServicesList subServices={barbershop.subServices} />

    </React.Fragment>
  );
}
