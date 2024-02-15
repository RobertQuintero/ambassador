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

type EmailBookingResponseProps = {
  name: string;
  email: string;
  mobileNumber: string;
  service: string;
  bookingDate: string;
  branch: string;
  message: string;
};

const EmailBookingResponse: React.FC<EmailBookingResponseProps> = ({
  name,
  mobileNumber,
  bookingDate,
  branch,
  service,
  email,
  message,
}: EmailBookingResponseProps) => {
  const baseUrl = siteConfig.url ? `${siteConfig.url}` : "";
  const previewText = `Thank you, ${name}! Your Booking has been Confirmed.`;
  const currentYear = new Date().getFullYear();
  const booking = new Date(bookingDate);
  const bookingDateFormatted = booking.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
                  src={`${baseUrl}/icon/AmbassadorLogoWhite.png
`}
                  width={350}
                  height={350}
                />
              </div>

              <Heading className="text-3xl text-center font-bold text-black ">
                <br />
                Thank You for Your Booking, {name}!
              </Heading>

              <Section className="px-6">
                <Text className="text-base">
                  Dear <strong>{name}</strong>,
                </Text>
                <Text>
                  Thank you for booking a service with{" "}
                  <strong>{siteConfig.name}</strong>. We&apos;re excited to
                  serve you.
                </Text>
                <Text>
                  Your booking details have been received, and we&apos;re
                  preparing to provide you with an exceptional experience.
                </Text>
                <Text>
                  We&apos;ve noted your preferences and are ready to accommodate
                  them. Please review the details below:
                </Text>
                <Text>
                  Our team is committed to ensuring your satisfaction. If you
                  have any special requests or concerns, please don&apos;t
                  hesitate to let us know.
                </Text>
                <Text>
                  We look forward to welcoming you on{" "}
                  <strong>{bookingDateFormatted}</strong> at our{" "}
                  <strong>{branch}</strong> location for your{" "}
                  <strong>{service}</strong> appointment.
                </Text>
                <Text>
                  If you have any questions or need to make changes to your
                  booking, feel free to contact us at any time.
                </Text>
              </Section>

              <Section className="px-2">
                <Text className="text-2xl text-center mt-4  font-bold text-black">
                  Booking Details
                </Text>
                {/* Personal Information */}
                <Row>
                  <Hr className="w-[96%] mb-4" />
                  <div className=" m-0 pl-4 w-full">
                    <p className="text-gray-500 text-sm mt-1 mb-0">
                      Booking Date
                    </p>
                    <Text className="text-black text-lg my-1 font-bold ">
                      {bookingDateFormatted}
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
                    <p className="text-gray-500 text-sm mt-1 mb-0">Message</p>
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

export { EmailBookingResponse };
