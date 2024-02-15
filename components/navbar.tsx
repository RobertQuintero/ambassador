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
import React from "react";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useReducer(
    (current) => !current,
    false
  );

  return (
    <NextUINavbar
      maxWidth="full"
      shouldHideOnScroll
      className="max-w-[1536px] bg-transparent   !z-40 mx-auto"
      height={"6rem"}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="flex absolute  left-0 ml-4">
        <Button
          as={Link}
          href="/booking"
          variant="bordered"
          size="sm"
          className=" md:scale-125 md:text-base font-bold"
        >
          Book Now
        </Button>
      </NavbarContent>

      <NavbarBrand className="absolute -left-0 flex justify-center w-full">
        <NextLink href="/" className="">
          <AnimatedLogo className="w-fit h-16" />
        </NextLink>
      </NavbarBrand>

      <NavbarMenuToggle className="absolute right-0 mr-4 md:scale-150 text-default-500  hover:text-default-800 transition-all" aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
      <NavbarMenu className=" md:pt-8 hideScroll flex-col md:flex-row md:justify-evenly h-full ">
        <div className="flex flex-col  gap-3 lg:gap-5 ">
          <NavbarMenuItem className="">
            <AnimatedButtonNavLink
              link="/"
              titleLink="Home"
              onPress={() => setIsMenuOpen()}
            >
            home
            </AnimatedButtonNavLink>
          </NavbarMenuItem>
          <NavbarMenuItem className="">
            <AnimatedButtonNavLink
              link="/about"
              titleLink="About us"
              onPress={() => setIsMenuOpen()}
            />
          </NavbarMenuItem>
          <NavbarMenuItem className="">
            <AnimatedButtonNavLink
              link="/booking"
              titleLink="Book Now"
              onPress={() => setIsMenuOpen()}
            />
          </NavbarMenuItem>
        </div>

        <div className="flex flex-col  gap-3 lg:gap-5 ">
          {siteConfig.navItemsService.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="">
              <AnimatedButtonNavLink
                link={item.href}
                titleLink={item.label}
                onPress={() => setIsMenuOpen()}
              />
            </NavbarMenuItem>
          ))}
        </div>

        <div className=" flex flex-col gap-3 lg:gap-5 ">
          {siteConfig.navItemsResources.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="">
              <AnimatedButtonNavLink
                link={item.href}
                titleLink={item.label}
                onPress={() => setIsMenuOpen()}
              />
            </NavbarMenuItem>
          ))}
        </div>

        <div className="  flex flex-col gap-3 lg:gap-5  ">
          <p
            className={`!font-semibold text-center text-default-500 relative !w-fit ${title(
              { size: "lg" }
            )}`}
          >
            Follow us
            <HandThumbUpIcon className="w-6 h-6 md:w-8 md:h-8 absolute -rotate-45 -top-2 md:-top-4 -right-4 text-default-700 " />{" "}
          </p>
          <div className="flex flex-row gap-4 md:gap-6  ">
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
          <div className="flex flex-row gap-4 md:gap-5">
            <Link
              isExternal
              href={`mailto:${siteConfig.email}`}
              aria-label="instagram"
              size="md"
            >
              <EnvelopeIcon className="-ml-0.5 w-7 md:w-8 text-default-500  hover:text-default-800 transition-all" />
            </Link>
            <Link
              isExternal
              href={`tel:${siteConfig.telephone}`}
              aria-label="instagram"
            >
              <PhoneIcon className="w-6 md:w-7 text-default-500  hover:text-default-800 transition-all" />
            </Link>
            <Link
              isExternal
              href={`tel:${siteConfig.mobile}`}
              aria-label="instagram"
            >
              <MobileIcon className="-ml-1.5 w-7 md:w-8 text-default-500 hover:text-default-800 transition-all" />
            </Link>
          </div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
