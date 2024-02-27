import { getTattooPageData } from "@/sanity/utils/sanity-services-barbershop-salon-tattoo";
import React from "react";
import { TattooServicesList } from "./components/tattooServiceList";
import { ServicePriceList } from "@/components/card/servicePriceList";

export const revalidate = 60 * 60;

export default async function Tattoo() {

  const tattoo = await getTattooPageData();
  return (
    <React.Fragment>
        <TattooServicesList servicesPage={tattoo} />
        <ServicePriceList service={tattoo} />
    </React.Fragment>
  );
}
