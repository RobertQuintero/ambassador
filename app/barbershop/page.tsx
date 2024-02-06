import { getBarbershopPageData } from "@/sanity/utils/sanity-services-barbershop-salon-tattoo";
import React from "react";


export const revalidate = 1;

export default async function Barbershop() {

  const barbershop = await getBarbershopPageData();
  return (
    <React.Fragment>
        <p>Barbershop</p>
    </React.Fragment>
  );
}
