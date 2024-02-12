import { getTattooPageData } from "@/sanity/utils/sanity-services-barbershop-salon-tattoo";
import React from "react";
import { TattooServicesList } from "./components/tattooServiceList";

export const revalidate = 1;

export default async function Tattoo() {

  const tattoo = await getTattooPageData();
  return (
    <React.Fragment>
        <TattooServicesList subServices={tattoo.subServices} />
    </React.Fragment>
  );
}
