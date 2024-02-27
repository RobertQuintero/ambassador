
import React from "react";
import { BookingHeader } from "./components/bookingHeader";
import { BookingForm } from "./components/bookingForm";
import { getAllSubServicesData} from "@/sanity/utils/sanity-services-barbershop-salon-tattoo";
import { getBranchesData } from "@/sanity/utils/sanity-branches";


export const revalidate = 60 * 60;

export default async function Booking() {

  const getAllSubServices = await getAllSubServicesData();
  const getAllBranches = await getBranchesData();
  return (
    <React.Fragment>
        <BookingHeader/>
        <BookingForm subServices={getAllSubServices } branches={getAllBranches}/>
    </React.Fragment>
  );
}
