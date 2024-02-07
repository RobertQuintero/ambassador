import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { AnimatedLogo } from "./animation/animatedLogo";
import { usePathname } from "next/navigation";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Button, Link } from "@nextui-org/react";
import { title } from "./primitives";
import { AnimatedButtonNavLink } from "./animation/animatedButtonLink";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./icons";

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
        <NavbarBrand className="flex relative justify-between w-full">
          <Button
            as={Link}
            href="/booking"
            radius="full"
            variant="bordered"
            className=""
          >
            Book Now
          </Button>
          <NextLink href="/">
            <AnimatedLogo className="w-24 h-fit md:w-40" />
          </NextLink>
          <NavbarMenuToggle className=" p-8 md:scale-150" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarMenu className="bg-background mt-4 md:mt-20 hideScroll pt-4 md:pt-12">
        <div className="grid grid-cols-5 justify-between ">
          <div className="col-span-1 flex flex-col gap-5">
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
          <div className="col-span-1 flex flex-col gap-5">
            {siteConfig.navItemsService.map((item) => (
              <NavbarMenuItem key={item.label} className="">
                <AnimatedButtonNavLink
                  link={item.href}
                  titleLink={item.label}
                />
              </NavbarMenuItem>
            ))}
          </div>
          <div className="col-span-1 flex flex-col gap-5">
            {siteConfig.navItemsResources.map((item) => (
              <NavbarMenuItem key={item.label} className="">
                <AnimatedButtonNavLink
                  link={item.href}
                  titleLink={item.label}
                />
              </NavbarMenuItem>
            ))}
          </div>
          <div className="col-span-2 flex flex-col gap-5">
            <div className="flex flex-row items-center justify-center gap-4 md:gap-8 mt-3 w-full">
              {siteConfig.links.instagram ? (
                <Link
                  isExternal
                  href={siteConfig.links.instagram}
                  aria-label="instagram"
                >
                  <InstagramIcon className="text-default-400 scale-100 md:scale-150  hover:text-default-800 transition-all" />
                </Link>
              ) : null}
              {siteConfig.links.facebook ? (
                <Link
                  isExternal
                  href={siteConfig.links.facebook}
                  aria-label="facebook"
                >
                  <FacebookIcon className="text-default-400 scale-100 md:scale-150  hover:text-default-800 transition-all" />
                </Link>
              ) : null}
              {siteConfig.links.twitter ? (
                <Link
                  isExternal
                  href={siteConfig.links.twitter}
                  aria-label="twitter"
                >
                  <TwitterIcon className="text-default-400 scale-100 md:scale-150 hover:text-default-800 transition-all" />
                </Link>
              ) : null}
              {siteConfig.links.linkedin ? (
                <Link
                  isExternal
                  href={siteConfig.links.linkedin}
                  aria-label="LinkedIn"
                  className=""
                >
                  <LinkedInIcon className="text-default-400 scale-100 md:scale-150 hover:text-default-800 transition-all" />
                </Link>
              ) : null}
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
