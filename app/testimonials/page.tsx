
import { getTestimonialData } from "@/sanity/utils/sanity-testimonials";
import React from "react";
import { TestimonialsList } from "./components/testimonialsList";

export const revalidate = 1;

export default async function Testimonials() {

  const testimonials = await getTestimonialData();
  return (
    <React.Fragment>
        <TestimonialsList testimonials={testimonials} />
    </React.Fragment>
  );
}
