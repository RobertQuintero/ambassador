
import { getTestimonialData } from "@/sanity/utils/sanity-testimonials";
import React from "react";
import { TestimonialsList } from "./components/testimonialsList";

export const revalidate = 60 * 60 * 24;

export default async function Testimonials() {

  return (
    <React.Fragment>
        <TestimonialsList />
    </React.Fragment>
  );
}
