import { Link } from "@nextui-org/react";
import { title } from "@/components/primitives";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
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
const AnimatedButtonNavLink = ({ link, titleLink }: LinkArrowProps) => {
  return (
    <div className="relative group flex flex-row items-center z-10">
      <Link
        href={link}
        className="text-default-500 hover:text-warning transition-colors  gap-4 z-10 "
      >
        {titleLink}
      </Link>
      <ChevronRightIcon className="w-4 h-4  relative opacity-0 -z-20 right-3 duration-700 ease-in-out group-hover:text-warning group-hover:w-4 group-hover:h-4 group-hover:right-0 group-hover:opacity-100  group-hover:duration-700 group-hover:ease-in-out" />
    </div>
  );
};

export { AnimatedButtonLink, AnimatedButtonNavLink };
