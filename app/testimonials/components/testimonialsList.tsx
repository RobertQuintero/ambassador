
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { title } from "@/components/primitives";
import { TestimonialsType } from "@/types/testimonialsType";

import React from "react";
import { TestimonialCard } from "./testimonialCard";

type TestimonialsListProps = {
  testimonials: TestimonialsType[];
};

const TestimonialsList = ({ testimonials }: TestimonialsListProps) => {
  return (
    <React.Fragment>
      <AnimatedDivLeftRightUpDown direction="down" className="mx-auto flex justify-center" >
      <h2
        className={`!font-bold text-warning max-w-7xl ${title({
          size: "xxl",
        })}`}
      >
        Testimonials
      </h2>
      </AnimatedDivLeftRightUpDown>
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 break-inside-avoid h-auto mt-8 mb-14 sm:mb-16 md:mb-24 lg:mb-28 xl:mb-32 2xl:mb-64">
        {testimonials.map((testimonial,index) => (
          <div className="break-inside-avoid h-auto" key={testimonial.fullName}>
            <AnimatedDivLeftRightUpDown direction="up" delay={index}>
              <TestimonialCard testimonial={testimonial} />
            </AnimatedDivLeftRightUpDown>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export { TestimonialsList };