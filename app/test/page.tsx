"use client";

import { paragraph } from "@/components/primitives";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import React from "react";


export default function Test() {


	return (
		<React.Fragment>
			<div className="mt-96 w-full">

          <div className="p-4 flex flex-col items-center justify-center w-full h-full max-w-lg relative animate-appearance-in  mx-auto">
            <div className="w-24 h-24 rounded-full  bg-default/20 border border-default-50 animate-pulse relative z-20" />
            <div className="w-16 h-16 rounded-full  animate-ping border border-default-50 absolute top-8 -z-10" />
            <div className="w-12 h-12 rounded-full  animate-ping border border-default-50 delay-300 duration-300 absolute top-10 -z-10" />
            <CheckBadgeIcon className="w-16 h-16 text-default-800  absolute top-8 animate-appearance-in drop-shadow-lg" />
            <p
              className={`!text-default-500 text-center mt-4 ${paragraph({
                size: "sm",
              })}`}
            >
              Our team will now carefully assess your message, and we aim to
              provide you with a response within the next{" "}
              <strong className="text-warning">14 days</strong>. Please be
              patient during this process, as we strive to give each message
              the attention it deserves.
            </p>
          </div>
			</div>


      {/* <AnimatedLogo /> */}

		</React.Fragment>
	);
}