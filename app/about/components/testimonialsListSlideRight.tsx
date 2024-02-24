import { TestimonialCard } from "@/app/testimonials/components/testimonialCard";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { title } from "@/components/primitives";
import { TestimonialsType } from "@/types/testimonialsType";
import React from "react";
import { AnimatedParallaxCard } from "@/components/animation/animatedCarousel";

type TestimonialsListSlideRightProps = {
  testimonials: TestimonialsType[];
};

const TestimonialsListSlideRight = ({
  testimonials,
}: TestimonialsListSlideRightProps) => {
  return (
    <div className="my-14 sm:my-16 md:my-24 lg:my-28 xl:my-32 2xl:my-64">
      <AnimatedDivLeftRightUpDown
        className="flex flex-col justify-center items-center "
        direction="up"
      >
        <h2
          className={`!font-bold text-default-900 text-center my-4 md:my-6 ${title(
            { size: "xxl" }
          )}`}
        >
          Testimonials
        </h2>
      </AnimatedDivLeftRightUpDown>
      <AnimatedDivLeftRightUpDown direction="left">
        <AnimatedParallaxCard baseVelocity={2}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-max min-h-full mr-auto">
              <TestimonialCard
                shadowClass="!max-h-[5rem]"
                className="max-w-xs md:max-w-md h-full mx-1 md:mx-4"
                testimonial={testimonial}
              />
            </div>
          ))}
        </AnimatedParallaxCard>
      </AnimatedDivLeftRightUpDown>
    </div>
  );
};

export { TestimonialsListSlideRight };
