"use client";
import { Button, Divider, Input, Link } from "@nextui-org/react";
import React from "react";
import { siteConfig } from "@/config/site";
import { title } from "./primitives";
import { AnimatedButtonLink } from "./animation/animatedButtonLink";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TiktokIcon,
  TwitterIcon,
} from "./icons";
import { AnimatedLogo } from "./animation/animatedLogo";
import NextLink from "next/link";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <React.Fragment>
      <Divider />
      <footer className="container mx-auto max-w-7xl px-4 sm:px-8 py-12 ">
        <div className="max-w-7xl mx-auto grid grid-cols-8 w-full my-8 sm:my-12 gap-8">
          <div className="flex flex-col justify-center items-center gap-4  col-span-8  md:col-span-4 w-full  order-3 md:order-2">
            <Link as={NextLink} href="/" aria-label="home">
              <AnimatedLogo className="w-60 h-60" />
            </Link>
            <div className="flex flex-row justify-center   gap-2 w-full">
              {siteConfig.links.instagram ? (
                <Link
                  isExternal
                  href={siteConfig.links.instagram}
                  aria-label="instagram"
                >
                  <InstagramIcon className="text-default-500 hover:text-default-700  transition-all" />
                </Link>
              ) : null}
              {siteConfig.links.tiktok ? (
                <Link
                  isExternal
                  href={siteConfig.links.tiktok}
                  aria-label="tiktok"
                >
                  <TiktokIcon className="text-default-500 hover:text-default-700  transition-all" />
                </Link>
              ) : null}
              {siteConfig.links.facebook ? (
                <Link
                  isExternal
                  href={siteConfig.links.facebook}
                  aria-label="facebook"
                >
                  <FacebookIcon className="text-default-500 hover:text-default-700  transition-all" />
                </Link>
              ) : null}
              {siteConfig.links.twitter ? (
                <Link
                  isExternal
                  href={siteConfig.links.twitter}
                  aria-label="twitter"
                >
                  <TwitterIcon className="text-default-500 hover:text-default-700  transition-all" />
                </Link>
              ) : null}
              {siteConfig.links.linkedin ? (
                <Link
                  isExternal
                  href={siteConfig.links.linkedin}
                  aria-label="LinkedIn"
                  className=""
                >
                  <LinkedInIcon className="text-default-500 w-7 hover:text-default-700  transition-all" />
                </Link>
              ) : null}
            </div>
            <p
              className={`!font-normal !text-default-500 !text-center ${title({
                size: "sm",
              })}`}
            >
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p
              className={`!font-normal !text-default-500 !text-center ${title({
                size: "sm",
              })}`}
            >
              {siteConfig.address}
            </p>
            <p
              className={`!font-normal !text-default-500 !text-center ${title({
                size: "sm",
              })}`}
            >
              Created by{" "}
              <Link
                as={NextLink}
                href={siteConfig.createdByUrl}
                target="_blank"
              >
                {siteConfig.createByName}
              </Link>
            </p>
          </div>

          <div className="flex flex-row justify-center gap-4 col-span-8 md:col-span-2 w-full order-2  md:order-1">
            <div className="flex flex-col items-center gap-2 w-full">
              <AnimatedButtonLink link="/" titleLink="Home" />
              <AnimatedButtonLink link="/booking" titleLink="Booking" />
              <AnimatedButtonLink link="/artists" titleLink="Artists" />
              <AnimatedButtonLink link="/barbershop" titleLink="Barbershop" />
              <AnimatedButtonLink link="/salon" titleLink="Salon" />
              <AnimatedButtonLink link="/tattoo" titleLink="Tattoo" />
            </div>
          </div>

          <div className="flex flex-row  gap-4 col-span-8 md:col-span-2 w-full order-1 md:order-3">
            <div className="flex flex-col items-center gap-2 w-full">
              <AnimatedButtonLink link="/about" titleLink="About Us" />
              <AnimatedButtonLink link="/branches" titleLink="Branches" />
              <AnimatedButtonLink link="/gallery" titleLink="Gallery" />
              <AnimatedButtonLink link="/testimonial" titleLink="Testimonials"/>
              <AnimatedButtonLink link="/contact" titleLink="Contact" />
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
