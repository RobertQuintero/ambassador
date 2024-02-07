// projectLinks.tsx component
import React from "react";
import { AtSymbolIcon, DevicePhoneMobileIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";


import {
  Button,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  cn,
} from "@nextui-org/react";
import { socialMediaType } from "@/types/socialMediaType";
import { FacebookIcon, InstagramIcon, PinterestIcon, TwitterIcon,LinkedInIcon, TiktokIcon, YoutubeIcon } from "../icons";

type SocialMediaLinkProps = {
  socialMediaLinks: socialMediaType[];
  className?: string;
  classNameIcon?: any;
  props?: any;
  size?: "sm" | "md" | "lg";
  iconSize?: string;
};

const projectTypeIcons = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  Pinterest: PinterestIcon,
  Tiktok: TiktokIcon,
  YoutubeIcon: YoutubeIcon,
  Website: GlobeAltIcon,
  Phone:DevicePhoneMobileIcon,
  Email:AtSymbolIcon,
};

const SocialMediaLink = ({
  socialMediaLinks,
  size,
  props,
  iconSize,
  classNameIcon,
  className,
}: SocialMediaLinkProps) => {

  return (
    <div
      className={cn(
        "flex flex-wrap gap-0 md:gap-2 w-fit h-fit items-center",
        className
      )}
      {...props}
    >

        {socialMediaLinks.map((socialMediaLink) => {
        const projectType =
          socialMediaLink.linkType as keyof typeof projectTypeIcons; //
        const Icon = projectTypeIcons[projectType];
        return (

              <Button key={socialMediaLink.linkType} as={Link} href={socialMediaLink.url} target={socialMediaLink.url} isIconOnly radius="none" variant="light" size={size} aria-label={socialMediaLink.linkType}>
                {Icon && <Icon className={`text-default-600 w-6 h-6  md:w-8 md:h-8 ${classNameIcon}`} />}
              </Button>

        );
      })}
    </div>
  );
};

export { SocialMediaLink };
