import { getBarbershopPageData } from "@/sanity/utils/sanity-services-barbershop-salon-tattoo";
import React from "react";
import { BarbershopServicesList } from "./components/barbershopServiceList";
import { SubServiceCard } from "@/components/card/subServiceCard";


export const revalidate = 1;

export default async function Barbershop() {

  const barbershop = await getBarbershopPageData();

  console.log(barbershop.subServices);
  return (
    <React.Fragment>
        <BarbershopServicesList subServices={barbershop.subServices} />

    </React.Fragment>
  );
}
