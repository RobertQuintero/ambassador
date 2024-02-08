"use client";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { paragraph, title } from "@/components/primitives";
import React from "react";
import { TestimonialCard } from "./testimonialCard";
import { useAtomValue } from "jotai";
import { filteredTestimonials } from "@/app/atoms/testimonialsAtom";
import { ShowMoreButton } from "@/app/atoms/components/showMoreButton";
import { siteConfig } from "@/config/site";
import { AnimatedLogoFull } from "@/components/animation/animatedLogo";

const TestimonialsList = () => {
  const testimonials = useAtomValue(filteredTestimonials);
  return (
    <React.Fragment>
      <AnimatedLogoFull className="w-64 sm:w-80 h-fit mx-auto" />
      <AnimatedDivLeftRightUpDown
        className="flex flex-col justify-center items-center"
        direction="up"
      >
        <h1
          className={`!font-bold text-default-900 text-center !text-5xl sm:!text-6xl my-4 md:my-6 ${title(
            { size: "xxxl" }
          )}`}
        >
          Testimonials
        </h1>
        <p
          className={` max-w-2xl text-center mb-4 md:mb-8 xl:mb-16 ${paragraph({
            size: "md",
          })}`}
        >
          {/* //the website is about barbershop/salon/  */}
          Explore experiences from our clients. Discover insights, satisfaction
          levels, and inspiration shared by our community. Your feedback and
          inquiries are always welcome as we strive for excellence.
        </p>
      </AnimatedDivLeftRightUpDown>

      <AnimatedDivLeftRightUpDown direction="up" delay={0.7}>
      <TestimonialCard
        testimonial={testimonials[0]}
        className="max-w-xl border-default-400"
      />
      </AnimatedDivLeftRightUpDown>
      <div className="w-full h-full flex flex-col justify-center items-center my-16 md:my-32 ">
        <AnimatedDivLeftRightUpDown
          direction="up"
          className="mx-auto flex flex-col justify-center"
        >
          <h2
            className={`text-default-800 !text-center ${title({
              size: "xxl",
            })}`}
          >
            What Our Clients Say
          </h2>
          <p
            className={`!text-default-800 mb-4 md:mb-8 xl:mb-16 text-center mx-auto !max-w-xl ${paragraph(
              {
                size: "md",
              }
            )}`}
          >
            "Welcome to {siteConfig.name} ! Before you fill out the form, we
            want to thank you for choosing us. Your satisfaction matters most,
            and we&apos;re here to make sure you leave feeling great. Got any
            questions? Just ask. Let&apos;s get started!"
          </p>
        </AnimatedDivLeftRightUpDown>
        <div className="max-w-7xl mx-auto columns-1 gap-4 md:gap-8 xl:gap-10 sm:columns-2 lg:columns-3 ">
          {testimonials.slice(1).map((testimonial, index) => (
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
