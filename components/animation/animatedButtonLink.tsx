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
  onPress?: () => void;
};

const AnimatedButtonLink = ({
  link,
  titleLink,
  className,
  onPress,
}: LinkArrowProps) => {
  const pathname = usePathname();
  return (
    <Link
      onPress={onPress}
      href={link}
      className={`w-fit font-semibold relative before:absolute before:left-0 before:bottom-0 before:origin-right before:scale-x-0 before:transform before:transition-transform before:duration-700 before:ease-in-out before:h-0.5 before:lg:h-1 before:w-full before:bg-default-500 before:rounded-sm hover:before:scale-x-100 hover:before:origin-left
        hover:before:bg-default-800 hover:!text-default-800 transition-all
					${title({ size: "md" })}
          ${
            pathname === link
              ? "before:scale-x-100 text-default-800 before:bg-default-800"
              : "text-default-500"
          }
          ${className}
        `}
    >
      {titleLink}
    </Link>
  );
};
const AnimatedButtonNavLink = ({
  link,
  titleLink,
  className,
  onPress,
}: LinkArrowProps) => {
  const pathname = usePathname();
  return (
    <React.Fragment>
      <Link
        onPress={onPress}
        href={link}
        className={` font-semibold relative before:absolute before:left-0 before:bottom-0 before:origin-right before:scale-x-0 before:transform before:transition-transform before:duration-700 before:ease-in-out before:h-1 before:lg:h-1.5 before:w-full before:bg-default-500 before:rounded-sm hover:before:scale-x-100 hover:before:origin-left
        hover:before:bg-default-800 hover:!text-default-800 transition-all
					${title({ size: "xl" })}
          ${
            pathname === link
              ? "before:scale-x-100 text-default-800 before:bg-default-800"
              : "text-default-500"
          }
          ${className}
        `}
      >
        {titleLink}
      </Link>
    </React.Fragment>
  );
};

export { AnimatedButtonLink, AnimatedButtonNavLink };
