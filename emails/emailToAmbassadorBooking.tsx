import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import { siteConfig } from "@/config/site";
import React from "react";
import EmailFooter from "./emailFooter";

type EmailToAmbassadorBookingProps = {
  name: string;
  email: string;
  mobileNumber: string;
  service: string;
  bookingDate: string;
  branch: string;
  message: string;
};

const EmailToAmbassadorBooking: React.FC<EmailToAmbassadorBookingProps> = ({
  name,
  mobileNumber,
  bookingDate,
  branch,
  service,
  email,
  message,
}: EmailToAmbassadorBookingProps) => {
  const baseUrl = siteConfig.url ? `${siteConfig.url}` : "";
  const previewText = `New Booking Scheduled from ${name} at ${branch} on ${bookingDate} for ${service}`;
  const booking = new Date(bookingDate);
  const bookingDateTimeFormatted = `${booking.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })} ${booking.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`;
  return (
    <React.Fragment>
      <Html className="bg-white">
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="font-sans">
            <Container className="rounded-md border-[#f3f3f5] my-[40px] mx-auto max-w-[44rem]">
              <div className="h-fit mx-auto w-80
">
                <Img
                  className="object-cover  rounded-t-md h-full w-full -z-10"
                  alt="Logo"
                  src={`${baseUrl}/icon/AmbassadorLogoWhite.png`}
                  width={300}
                  height={300}
                />
              </div>
              <Section className="px-2">
                <Text className="text-2xl text-center mt-4  font-bold text-black">
                  Booking Details
                </Text>
                {/* Personal Information */}
                <Row>
                  <Hr className="w-[96%] mb-4" />
                  <div className=" m-0 pl-4 w-full">
                    <p className="text-gray-500 text-sm mt-1 mb-0">
                      Booking Date and Time
                    </p>
                    <Text className="text-black text-lg my-1 font-bold ">
                      {bookingDateTimeFormatted}
                    </Text>
                  </div>
                  <div className=" m-0 pl-4 w-full">
                    <p className="text-gray-500 text-sm mt-1 mb-0">Full Name</p>
                    <Text className="text-black text-lg my-1 font-bold ">
                      {name}
                    </Text>
                  </div>
                  <div className=" m-0 pl-4 w-full">
                    <p className="text-gray-500 text-sm mt-1 mb-0">Email</p>
                    <Link href={`mailto:${email}`}>
                      <Text className="text-black text-lg my-1 font-bold ">
                        {email}
                      </Text>
                    </Link>
                  </div>
                  <div className=" m-0 pl-4 w-full">
                    <p className="text-gray-500 text-sm mt-1 mb-0">
                      Mobile Number
                    </p>
                    <Text className="text-black text-lg my-1 font-bold ">
                      {mobileNumber}
                    </Text>
                  </div>
                  <div className=" m-0 pl-4 w-full">
                    <p className="text-gray-500 text-sm mt-1 mb-0">Branch</p>
                    <Text className="text-black text-lg my-1 font-bold ">
                      {branch}
                    </Text>
                  </div>
                  <div className=" m-0 pl-4 w-full">
                    <p className="text-gray-500 text-sm mt-1 mb-0">Service</p>
                    <Text className="text-black text-lg my-1 font-bold ">
                      {service}
                    </Text>
                  </div>
                  <div className=" m-0 pl-4 w-full">
                    <p className="text-gray-500 text-sm mt-1 mb-0">Note</p>
                    <Text className="text-black text-lg my-1 font-bold ">
                      {message}
                    </Text>
                  </div>
                </Row>
              </Section>
              <EmailFooter />
            </Container>
          </Body>
        </Tailwind>
      </Html>
    </React.Fragment>
  );
};

export { EmailToAmbassadorBooking };
