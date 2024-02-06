
import { getTestimonialData } from "@/sanity/utils/sanity-testimonials";
import React from "react";

export const revalidate = 1;

export default async function Testimonials() {

  const testimonials = await getTestimonialData();
  return (
    <React.Fragment>
        <p>Testimonials</p>
    </React.Fragment>
  );
}
