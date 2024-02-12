import { getSalonPageData } from "@/sanity/utils/sanity-services-barbershop-salon-tattoo";
import React from "react";
import { SalonServicesList } from "./components/salonServiceList";


export const revalidate = 1;

export default async function Salon() {

  const salon = await getSalonPageData();

  return (
    <React.Fragment>
        <SalonServicesList subServices={salon.subServices} />
    </React.Fragment>
  );
}
