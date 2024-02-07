"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { AnimatedLogo } from "./animation/animatedLogo";
import { Button, Link } from "@nextui-org/react";
import { title } from "./primitives";
import { AnimatedButtonNavLink } from "./animation/animatedButtonLink";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MobileIcon,
  TwitterIcon,
} from "./icons";
import {
  EnvelopeIcon,
  HandThumbUpIcon,
  MapIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export const Navbar = () => {



  return (
    <NextUINavbar
      maxWidth="2xl"
      position="sticky"
      shouldHideOnScroll
      className="w-full h-20  md:h-36 bg-transparent "
      isBordered={false}
      isBlurred={false}
    >
      <NavbarContent className="w-full">
        <NavbarBrand className="flex relative  w-full">
          <motion.div   className="absolute left-0"  whileHover={{ scale: 1.2, }}>

          <Button
            as={Link}
            href="/booking"
            variant="shadow"
            className={`!font-bold bg-default-400/20  border border-default-100 pt-0.5 animate-pulse ${title({ size: "lg" })}`}
          >
            Book Now
          </Button>
          </motion.div>
          <NextLink href="/" className="mx-auto">
            <AnimatedLogo className=" w-24 h-fit md:w-40" />
          </NextLink>
          <NavbarMenuToggle className="absolute right-0 p-8 md:scale-150" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarMenu className="bg-background mt-4 md:mt-20 hideScroll flex items-center pt-4 md:pt-12 ">
        <div className="grid grid-cols-6 w-full items-start gap-6 md:gap-10 xl:gap-16 max-w-[1536px] ">
          <div className="col-span-6 lg:col-span-4 flex flex-wrap justify-between gap-3 md:gap-10 xl:gap-16 ">
            <div className="flex flex-col  gap-3 lg:gap-5 ">
              <NavbarMenuItem className="">
                <AnimatedButtonNavLink link="/" titleLink="Home" />
              </NavbarMenuItem>
              <NavbarMenuItem className="">
                <AnimatedButtonNavLink link="/about" titleLink="About us" />
              </NavbarMenuItem>
              <NavbarMenuItem className="">
                <AnimatedButtonNavLink link="/booking" titleLink="Book Now" />
              </NavbarMenuItem>
            </div>

            <div className="flex flex-col  gap-3 lg:gap-5 ">
              {siteConfig.navItemsService.map((item) => (
                <NavbarMenuItem key={item.label} className="">
                  <AnimatedButtonNavLink
                    link={item.href}
                    titleLink={item.label}
                  />
                </NavbarMenuItem>
              ))}
            </div>

            <div className=" flex flex-col gap-3 lg:gap-5 ">
              {siteConfig.navItemsResources.map((item) => (
                <NavbarMenuItem key={item.label} className="">
                  <AnimatedButtonNavLink
                    link={item.href}
                    titleLink={item.label}
                  />
                </NavbarMenuItem>
              ))}
            </div>
          </div>

          <div className="col-span-6 lg:col-span-2  flex flex-col gap-3 lg:gap-5  w-full">
            <p
              className={`!font-semibold text-center text-default-500 relative mx-auto !w-fit ${title(
                { size: "lg" }
              )}`}
            >
              Follow us
              <HandThumbUpIcon className="w-6 h-6 md:w-8 md:h-8 absolute -rotate-45 -top-2 md:-top-4 -right-4 text-default-700 animate-pulse " />{" "}
            </p>
            <div className="flex flex-row items-center justify-center gap-4 md:gap-8 mt-3 ">
              {siteConfig.links.instagram ? (
                <Link
                  isExternal
                  href={siteConfig.links.instagram}
                  aria-label="instagram"
                >
                  <InstagramIcon className="text-default-500 scale-125 md:scale-150  hover:text-default-800 transition-all" />
                </Link>
              ) : null}
              {siteConfig.links.facebook ? (
                <Link
                  isExternal
                  href={siteConfig.links.facebook}
                  aria-label="facebook"
                >
                  <FacebookIcon className="text-default-500 scale-125 md:scale-150  hover:text-default-800 transition-all" />
                </Link>
              ) : null}
              {siteConfig.links.twitter ? (
                <Link
                  isExternal
                  href={siteConfig.links.twitter}
                  aria-label="twitter"
                >
                  <TwitterIcon className="text-default-500 scale-125 md:scale-150 hover:text-default-800 transition-all" />
                </Link>
              ) : null}
              {siteConfig.links.linkedin ? (
                <Link
                  isExternal
                  href={siteConfig.links.linkedin}
                  aria-label="LinkedIn"
                  className=""
                >
                  <LinkedInIcon className="text-default-500 scale-125 md:scale-150 hover:text-default-800 transition-all" />
                </Link>
              ) : null}
              <ThemeSwitch />
            </div>

            <div className="flex flex-col gap-4 items-center w-full mt-4">
              {/* <div className="flex flex-row gap-2 items-center justify-center w-fit ">
                <MapIcon className="w-[2.2rem]  md:w-7 md:h-7 text-default-500" />
                <AnimatedButtonNavLink
                  link={`mailto:${siteConfig.address}`}
                  titleLink={siteConfig.address}
                  className={`!font-bold ${title({ size: "xl" })}`}
                />
              </div> */}
              <div className="flex flex-row gap-2 items-center justify-center w-fit ">
                <EnvelopeIcon className="w-6 h-6 md:w-[1.8rem] md:h-[1.8rem] text-default-500" />
                <AnimatedButtonNavLink
                  link={`mailto:${siteConfig.email}`}
                  titleLink={siteConfig.email}
                  className={`!font-bold max-w-xs ${title({ size: "xl" })}`}
                />
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-fit ">
                <PhoneIcon className="w-6 h-6 md:w-7 md:h-7 text-default-500" />
                <AnimatedButtonNavLink
                  link={`tel:${siteConfig.mobile}`}
                  titleLink={siteConfig.mobile}
                  className={`!font-bold ${title({ size: "xl" })}`}
                />
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-fit ">
                <MobileIcon className="w-6 h-6 md:w-8 md:h-8 text-default-500" />
                <AnimatedButtonNavLink
                  link={`tel:${siteConfig.telephone}`}
                  titleLink={siteConfig.telephone}
                  className={`!font-bold ${title({ size: "xl" })}`}
                />
              </div>
            </div>
          </div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
