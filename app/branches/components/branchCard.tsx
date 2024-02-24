// testimonial.tsx component
import { paragraph, title } from "@/components/primitives";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import React from "react";
import NextLink from "next/link";
import { BranchesType } from "@/types/branchesType";
import { SocialMediaLink } from "@/components/links/socialMediaLink";
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { MobileIcon } from "@/components/icons";

type BranchCardProps = {
  branch: BranchesType;
  className?: string;
};

const BranchCard = ({ branch, className }: BranchCardProps) => {
  return (
    <React.Fragment>
      <Card
        className={` h-auto mx-auto p-0 md:p-3 border-none hover:dark:bg-default/20 hover:bg-default-100 transition-all duration-500 ${className}`}
        radius="sm"
        isBlurred
        shadow="none"
      >
        <CardHeader>
          <p className={title({ size: "lg" })}>{branch.locationName}</p>
        </CardHeader>
        <CardBody className="gap-3 md:gap-3.5">
          <div className="hover:text-default-800 flex flex-row gap-2 items-start justify-center w-fit ">
            <MapIcon className="min-w-[1.3rem] h-[1.3rem] mt-1 text-default-700 " />
            <p className={` ${paragraph({ size: "md" })}`}>{branch.address}</p>
          </div>
          <Link
            className={`hover:text-default-800 whitespace-pre-wrap flex-row-reverse justify-end gap-2 ${paragraph(
              {
                size: "md",
              }
            )}`}
            as={NextLink}
            href={`mailto:${branch.email}`}
            showAnchorIcon
            anchorIcon={<EnvelopeIcon className="w-5 h-5 " />}
          >
            {branch.email}
          </Link>
          <Link
            className={`hover:text-default-800 flex-row-reverse justify-end gap-2 ${paragraph(
              {
                size: "md",
              }
            )}`}
            as={NextLink}
            href={`tel:${branch.mobile}`}
            showAnchorIcon
            anchorIcon={<PhoneIcon className="w-5 h-5 " />}
          >
            {branch.mobile}
          </Link>

          {branch.telephone ? (
            <Link
              className={`hover:text-default-800 flex-row-reverse justify-end gap-2 ${paragraph(
                {
                  size: "md",
                }
              )}`}
              as={NextLink}
              href={`tel:${branch.telephone}`}
              showAnchorIcon
              anchorIcon={<MobileIcon className="w-[1.40rem] h-[1.40rem]" />}
            >
              {branch.telephone}
            </Link>
          ) : null}
        </CardBody>
        <CardFooter>
          <SocialMediaLink socialMediaLinks={branch.socialMedia} />
        </CardFooter>
      </Card>
    </React.Fragment>
  );
};

export { BranchCard };
