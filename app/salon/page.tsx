import { getSalonPageData } from "@/sanity/utils/sanity-services-barbershop-salon-tattoo";
import React from "react";


export const revalidate = 1;

export default async function Salon() {

  const salon = await getSalonPageData();

  return (
    <React.Fragment>
        <p>Salon</p>
    </React.Fragment>
  );
}
