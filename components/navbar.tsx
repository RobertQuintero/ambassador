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

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { AnimatedLogo } from "./animation/animatedLogo";
import { usePathname } from "next/navigation";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "@nextui-org/react";
import { title } from "./primitives";

export const Navbar = () => {
  const pathname = usePathname();

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
        <NavbarBrand className="flex relative justify-evenly w-full">
          <NextLink href="/">
            <AnimatedLogo className="w-24 h-fit md:w-40" />
          </NextLink>
          <NavbarMenuToggle className="absolute right-0 z-20 p-8 md:scale-150" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarMenu className="bg-background mt-4 md:mt-20 hideScroll ">
        <div className="flex flex-col w-full ">
          {siteConfig.navItemsService.map((item) => (
            <NavbarMenuItem key={item.label} className="">
              <Link
                href={item.href}
                color="foreground"
                className={`font-semibold ${title({ size: "xxl" })}
				${
          pathname === item.href
            ? "text-primary border-b-4 border-top-0 border-x-0 "
            : "text-foreground"
        }`}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        <ThemeSwitch />
      </NavbarMenu>
    </NextUINavbar>
  );
};
