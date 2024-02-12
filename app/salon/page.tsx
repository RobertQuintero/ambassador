import { getSalonPageData } from "@/sanity/utils/sanity-services-barbershop-salon-tattoo";
import React from "react";
import { SalonServicesList } from "./components/salonServiceList";
import { ServicePriceList } from "@/components/card/servicePriceList";


export const revalidate = 1;

export default async function Salon() {

  const salon = await getSalonPageData();

  return (
    <React.Fragment>
        <SalonServicesList servicesPage={salon} />
        <ServicePriceList service={salon} />
    </React.Fragment>
  );
}
