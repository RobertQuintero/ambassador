import { getBarbershopPageData } from "@/sanity/utils/sanity-services-barbershop-salon-tattoo";
import React from "react";
import { BarbershopServicesList } from "./components/barbershopServiceList";
import { BarbershopHeader } from "./components/barbershopHeader";


export const revalidate = 1;

export default async function Barbershop() {

  const barbershop = await getBarbershopPageData();

  console.log(barbershop.subServices);
  return (
    <React.Fragment>
        <BarbershopHeader barbershop={barbershop}/>
        <BarbershopServicesList subServices={barbershop.subServices} />
    </React.Fragment>
  );
}
