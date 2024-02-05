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
    <NextUINavbar maxWidth="full" position="sticky" shouldHideOnScroll className=" h-24 md:h-40"  isBordered={false}>
      <NavbarContent >
        <NavbarBrand as="li" className="flex items-center w-full justify-center" >
          <NextLink href="/">
            <AnimatedLogo className="w-20 h-20    md:w-36 md:h-36" hidden="hidden"/>
          </NextLink>
        </NavbarBrand>
		<NavbarMenuToggle className="absolute right-8 md:right-20 "/>
      </NavbarContent>

      <NavbarMenu className="bg-background mt-8 md:mt-24 ">




		<div className="flex flex-col w-full z-20">
		{siteConfig.navItemsService.map((item) => (
		  <NavbarMenuItem key={item.label} className="">
			<Link href={item.href} color="foreground"
			  className={`font-semibold ${title({ size: "xxl" })}
				${pathname === item.href ? "text-primary border-b-4 border-top-0 border-x-0 " : "text-foreground"}`}

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
