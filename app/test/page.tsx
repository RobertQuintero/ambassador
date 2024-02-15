"use client";

import { AnimatedFirstPageLoad } from "@/components/animation/animatedFirstPageLoading";
import { AnimatedBarbershopLogo, AnimatedSalonLogo, AnimatedTattooLogo, } from "@/components/animation/animatedLogo";
import { EmailContactResponse } from "@/emails/emailContactResponse";

import React from "react";


export default function Test() {


	return (
		<React.Fragment>
			<EmailContactResponse email="sample@gmail.com" message="sample message " name="rrobert" subject="inqury" />
		</React.Fragment>
	);
}