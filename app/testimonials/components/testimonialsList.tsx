"use client";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { paragraph, title } from "@/components/primitives";
import React from "react";
import { TestimonialCard } from "./testimonialCard";
import { useAtomValue } from "jotai";
import { filteredTestimonials } from "@/app/atoms/testimonialsAtom";
import { ShowMoreButton } from "@/app/atoms/components/showMoreButton";

const TestimonialsList = () => {
  const testimonials = useAtomValue(filteredTestimonials);
  return (
    <React.Fragment>
      <AnimatedDivLeftRightUpDown
        className="flex flex-col justify-center items-center"
        direction="up"
      >
        <h1
          className={`!font-bold text-center !text-5xl sm:!text-6xl my-4 md:my-6 ${title(
            { size: "xxxl" }
          )}`}
        >
          Testimonials
        </h1>
        <p
          className={`!text-default-500 max-w-2xl text-center  ${paragraph({
            size: "md",
          })}`}
        >
          {/* //the website is about barbershop/salon/  */}
          Explore experiences from our <strong className="text-default-700 capitalize">Partners</strong> and <strong className="text-default-700 capitalize">Clients</strong>. Discover insights,
          satisfaction levels, and inspiration shared by our community. Your
          feedback is always welcome as we strive for excellence.
        </p>
      </AnimatedDivLeftRightUpDown>

      <AnimatedDivLeftRightUpDown direction="up" delay={0.7}>
        <TestimonialCard
          testimonial={testimonials[0]}
          className="max-w-xl border-default-400 my-14 md:my-20"
        />
      </AnimatedDivLeftRightUpDown>

      <div className="w-full h-full flex flex-col justify-center items-center  ">
        <AnimatedDivLeftRightUpDown
          direction="up"
          className="mx-auto flex flex-col justify-center"
        >
          <h2
            className={`text-default-800 !text-center ${title({
              size: "xxl",
            })}`}
          >
            What Our Partner and Clients Say
          </h2>
        </AnimatedDivLeftRightUpDown>
        <div className="max-w-7xl mx-auto columns-1 gap-4 md:gap-8 xl:gap-10 sm:columns-2 lg:columns-3 mt-8 md:mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              className="flex flex-col break-inside-avoid h-auto mb-4 md:mb-8 xl:mb-10"
              key={testimonial.fullName}
            >
              <AnimatedDivLeftRightUpDown
                className="flex flex-col break-inside-avoid-page "
                direction="up"
                delay={0.3 * (index + 1)}
              >
                <TestimonialCard testimonial={testimonial} />
              </AnimatedDivLeftRightUpDown>
            </div>
          ))}
        </div>
        <ShowMoreButton filteredAtom={filteredTestimonials} />
      </div>
    </React.Fragment>
  );
};

export { TestimonialsList };
