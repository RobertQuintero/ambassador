import React from "react";
import NextLink from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import { paragraph, title } from "@/components/primitives";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/icons";
import { siteConfig } from "@/config/site";
import { AnimatedDivLeftRightUpDown } from "@/components/animation/animatedDiv";
import { AnimatedLogoFull } from "@/components/animation/animatedLogo";
const AddressSocialMediaLinks = () => {
  return (
    <React.Fragment>
      <AnimatedLogoFull className="w-64 sm:w-80 h-fit mx-auto" />

      <AnimatedDivLeftRightUpDown
        className="flex flex-col justify-center items-center"
        direction="up"
      >
        <h1
          className={`!font-bold text-default-900 text-center !text-5xl sm:!text-6xl my-4 md:my-6 ${title(
            { size: "xxxl" }
          )}`}
        >
          Contact us
        </h1>
        <p
          className={` max-w-2xl text-center mb-4 md:mb-8 ${paragraph({
            size: "md",
          })}`}
        >
          {/* //the website is about barbershop/salon/  */}
          Thank you for visiting {siteConfig.name}! Whether you&apos;re looking
          to schedule an appointment, discuss potential collaborations, or have
          any questions, we&apos;re here to assist you. Your feedback and
          inquiries are important to us, so please don&apos;t hesitate to reach
          out.
        </p>
      </AnimatedDivLeftRightUpDown>

      <div className="max-w-7xl mx-auto md:items-center grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-4 my-16 md:my-32 ">
        {/* Inquiries */}
        <AnimatedDivLeftRightUpDown
          direction="left"
          className="col-span-3 md:col-span-1 order-2 sm:order-1"
          delay={1}
        >
          <Card
            className=" border border-default/30 bg-default/30 "
            radius="none"
            isBlurred
            shadow="none"
          >
            <CardHeader>
              <p
                className={`!text-default-800 !text-center ${title({
                  size: "xl",
                })}`}
              >
                Inquiries
              </p>
            </CardHeader>
            <CardBody>
              <p
                className={` ${paragraph({
                  size: "md",
                })}`}
              >
                Thank you for reaching out to {siteConfig.name}! Whether
              </p>
            </CardBody>
            <CardFooter>
              <Button
                as={Link}
                href="#ContactForm"
                size="lg"
                className="font-bold w-full"
                color="default"
                variant="solid"
                radius="none"
              >
                Contact us
              </Button>
            </CardFooter>
          </Card>
        </AnimatedDivLeftRightUpDown>
        {/* Main Branch */}
        <AnimatedDivLeftRightUpDown
          direction="up"
          className="col-span-3 md:col-span-2 order-1 sm:order-2"
        >
          <Card
            className=" border border-default/30 bg-default/30  pt-4"
            radius="none"
            isBlurred
            shadow="none"
          >
            <CardHeader className="items-center justify-center">
              <p
                className={` ${title({
                  size: "xl",
                })}`}
              >
                Main Branch
              </p>
            </CardHeader>
            <CardBody className={` gap-2 items-center `}>
              <p
                className={`hover:text-default-800 ${paragraph({
                  size: "md",
                })}`}
              >
                {siteConfig.address}
              </p>
              <Link
                className={`hover:text-default-800 ${paragraph({
                  size: "md",
                })}`}
                as={NextLink}
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </Link>
              <Link
                className={` hover:text-default-800 ${paragraph({
                  size: "md",
                })}`}
                as={NextLink}
                href={`tel:${siteConfig.mobile}`}
              >
                {siteConfig.mobile}
              </Link>
              <Link
                className={` hover:text-default-800 ${paragraph({
                  size: "md",
                })}`}
                as={NextLink}
                href={`tel:${siteConfig.telephone}`}
              >
                {siteConfig.telephone}
              </Link>
            </CardBody>
            <CardFooter className="flex-col">
              <div className="flex flex-row justify-center gap-2 w-full">
                {siteConfig.links.instagram ? (
                  <Link
                    isExternal
                    href={siteConfig.links.instagram}
                    aria-label="instagram"
                  >
                    <InstagramIcon
                      className="text-default-500 hover:text-default-800 transition-all"
                      size={50}
                    />
                  </Link>
                ) : null}
                {siteConfig.links.facebook ? (
                  <Link
                    isExternal
                    href={siteConfig.links.facebook}
                    aria-label="facebook"
                  >
                    <FacebookIcon
                      className="text-default-500 hover:text-default-800 transition-all"
                      size={50}
                    />
                  </Link>
                ) : null}
                {siteConfig.links.twitter ? (
                  <Link
                    isExternal
                    href={siteConfig.links.twitter}
                    aria-label="twitter"
                  >
                    <TwitterIcon
                      className="text-default-500 hover:text-default-800 transition-all"
                      size={50}
                    />
                  </Link>
                ) : null}
                {siteConfig.links.linkedin ? (
                  <Link
                    isExternal
                    href={siteConfig.links.linkedin}
                    aria-label="LinkedIn"
                    className=""
                  >
                    <LinkedInIcon
                      className="text-default-500  hover:text-default-800 transition-all"
                      size={50}
                    />
                  </Link>
                ) : null}
              </div>
              <Button
                size="lg"
                className="font-bold w-full mt-4"
                color="default"
                variant="solid"
                radius="none"
                as={NextLink}
                href="/branches"
              >
                Other Branches
              </Button>
            </CardFooter>
          </Card>
        </AnimatedDivLeftRightUpDown>
        {/* Book now */}
        <AnimatedDivLeftRightUpDown
          direction="right"
          className="col-span-3 md:col-span-1 order-3 sm:order-3"
          delay={1}
        >
          <Card
            className=" border border-default/30 bg-default/30 "
            radius="none"
            isBlurred
            shadow="none"
          >
            <CardHeader>
              <p
                className={` ${title({
                  size: "xl",
                })}`}
              >
                Make a Reservation
              </p>
            </CardHeader>
            <CardBody>
              <p
                className={` ${paragraph({
                  size: "md",
                })}`}
              >
                Thank you for reaching out to {siteConfig.name}! Whether
              </p>
            </CardBody>
            <CardFooter>
              <Button
                size="lg"
                className="font-bold w-full"
                color="default"
                variant="solid"
                radius="none"
                as={NextLink}
                href="/application"
              >
                Book Now
              </Button>
            </CardFooter>
          </Card>
        </AnimatedDivLeftRightUpDown>
      </div>
    </React.Fragment>
  );
};

export { AddressSocialMediaLinks };
