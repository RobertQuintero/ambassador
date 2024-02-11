import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { paragraph, title } from "@/components/primitives";
import React from "react";
import { AnimatedLogoFull } from "@/components/animation/animatedLogo";

const BookingHeader = () => {

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
          Booking
        </h1>
        <p
          className={` max-w-2xl text-center mb-4 md:mb-8 ${paragraph({
            size: "md",
          })}`}
        >
          Find the perfect time to book your next appointment with us. We are
          here to assist you with any questions or concerns you may have. We
          look forward to seeing you soon!
        </p>
      </AnimatedDivLeftRightUpDown>
    </React.Fragment>
  );
};

export { BookingHeader };