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
    <React.Fragment>
      <AnimatedDivLeftRightUpDown
        className="flex flex-col justify-center items-center"
        direction="up"
      >
        <h2
          className={`!font-bold text-default-900 text-center !text-5xl sm:!text-6xl my-4 md:my-6 ${title(
            { size: "xxxl" }
          )}`}
        >
          Testimonials
        </h2>
      </AnimatedDivLeftRightUpDown>

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
    </React.Fragment>
  );
};

export { TestimonialsListSlideRight };
