"use client";
import { Link } from "@nextui-org/react";
import { title } from "@/components/primitives";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { usePathname } from "next/navigation";
type LinkArrowProps = {
  link: string;
  titleLink?: string;
  hoverTitle?: string;
  children?: React.ReactNode;
  className?: string;
};

const AnimatedButtonLink = ({
  link,
  titleLink,
  hoverTitle,
  children,
}: LinkArrowProps) => {
  return (
    <Link
      href={link}
      size="lg"
      color="foreground"
      className="relative w-full group flex flex-row items-end gap-4 z-10 "
    >
      <span
        className={`!font-bold z-10 ${title({
          size: "xl",
        })}`}
      >
        {titleLink}
      </span>
      <span
        className={`relative opacity-0 -z-20 -left-10 duration-700 ease-in-out group-hover:left-0 group-hover:opacity-100  group-hover:duration-700 group-hover:ease-in-out !font-bold  ${title(
          {
            size: "lg",
            color: "blue",
          }
        )}`}
      >
        {hoverTitle}
      </span>
      <ChevronRightIcon className="w-7 h-7  relative opacity-1 -z-20 -ml-28 duration-700 ease-in-out group-hover:text-warning group-hover:w-8 group-hover:h-8 group-hover:-ml-4 group-hover:opacity-100  group-hover:duration-700 group-hover:ease-in-out" />
    </Link>
  );
};
const AnimatedButtonNavLink = ({ link, titleLink,className }: LinkArrowProps) => {
  const pathname = usePathname();
  return (
    <React.Fragment>
      <Link
        href={link}
        className={` font-semibold relative before:absolute before:left-0 before:bottom-0 before:origin-right before:scale-x-0 before:transform before:transition-transform before:duration-700 before:ease-in-out before:h-1.5 before:lg:h-2 before:w-full before:bg-default-500 before:rounded-sm hover:before:scale-x-100 hover:before:origin-left
        hover:before:bg-default-800 hover:!text-default-800 transition-all
					${title({ size: "v2xl" })}
          ${pathname === link ? "before:scale-x-100 text-default-800 before:bg-default-800" : "text-default-500"}
          ${className}
        `}
        >
        {titleLink}
      </Link>
    </React.Fragment>
  );
};


export { AnimatedButtonLink, AnimatedButtonNavLink };
