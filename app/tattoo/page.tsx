import { getTattooPageData } from "@/sanity/utils/sanity-services-barbershop-salon-tattoo";
import React from "react";

export const revalidate = 1;

export default async function Tattoo() {

  const tattoo = await getTattooPageData();
  return (
    <React.Fragment>
        <p>Tattoo</p>
    </React.Fragment>
  );
}
