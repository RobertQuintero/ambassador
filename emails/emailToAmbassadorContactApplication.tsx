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

type EmailToAmbassadorContactApplicationProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const EmailToAmbassadorContactApplication: React.FC<EmailToAmbassadorContactApplicationProps> = ({
  name,
  email,
  message,
  subject,
}: EmailToAmbassadorContactApplicationProps) => {
  const baseUrl = siteConfig.url ? `${siteConfig.url}` : "";
  const previewText = `Inquiry Name ${name} and ${subject}`;
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <Html className="bg-white">
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="font-sans">
            <Container className="rounded-md border-[#f3f3f5] my-[40px] mx-auto max-w-[44rem]">
              <div className="h-60 w-full">
                <Img
                  className="object-cover  rounded-t-md h-full w-full -z-10"
                  alt="Logo"
                  // src="https://utfs.io/f/cef924ce-0707-4ff2-9e47-27819b922d87-5pkz02.jpg"
                  src={`${baseUrl}/bg/primera.jpg`}
                  width={200}
                  height={200}
                />
              </div>

              <Heading className="text-3xl text-center font-bold text-black ">
                <br />
                Inquiry Name {name} and {subject}
              </Heading>

              <Section className="px-2">
                <Text className="text-2xl text-center mt-4  font-bold text-black">
                  Inquiry Details
                </Text>
                {/* Personal Information */}
                <Row>
                  <Hr className="w-[96%] mb-4" />
                  <div className=" m-0 pl-4 w-full">
                    <p className="text-gray-500 text-sm mt-1 mb-0">Subject</p>
                    <Text className="text-black text-lg my-1 font-bold ">
                      {subject}
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
                    <p className="text-gray-500 text-sm mt-1 mb-0">Message</p>
                    <Text className="text-black text-lg my-1 font-bold ">
                      {message}
                    </Text>
                  </div>
                </Row>
              </Section>

              {/* Site  */}
              <Section className="px-2 mt-8">
                <Text className="text-center mt-4 text-gray-500">
                  If you didn&apos;t request this email, there&apos;s nothing to
                  worry about, you can safely ignore it.
                </Text>
                <Text className="text-center mt-4 text-gray-500">
                  If you have any questions, please contact us at{" "}
                  <Link href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </Link>
                </Text>

                <Link href={siteConfig.url} className="m-auto" target="_blank">
                  <Img
                    src={`${baseUrl}/bg/primeraWhite.png`}
                    width="170"
                    height="70"
                    alt="Primera"
                    className="m-auto"
                  />
                </Link>
                <br />
                <Row align="center" className="w-72">
                  <Column align="center">
                    <Link
                      href={`${baseUrl}/`}
                      className="text-black font-bold underline"
                      target="_blank"
                    >
                      Work
                    </Link>
                  </Column>
                  <Column align="center">
                    <Link
                      href={`${baseUrl}/talents`}
                      className="text-black font-bold underline"
                      target="_blank"
                    >
                      Talents
                    </Link>
                  </Column>
                  <Column align="center">
                    <Link
                      href={`${baseUrl}/about`}
                      className="text-black font-bold underline"
                      target="_blank"
                    >
                      About
                    </Link>
                  </Column>
                  <Column align="center">
                    <Link
                      href={`${baseUrl}/contact`}
                      className="text-black font-bold underline"
                      target="_blank"
                    >
                      Contact
                    </Link>
                  </Column>
                </Row>
              </Section>

              {/* Stay Connected */}
              <Section className="mt-6">
                <Text className="text-2xl text-center mt-4  font-bold text-black">
                  Stay Connected
                </Text>
                <Text className="text-center text-gray-500">
                  Follow us our social media to stay up to date with our latest
                  news
                </Text>
                <div className="flex justify-center items-center mx-auto gap-6 mt-4">
                  <Link href={siteConfig.links.instagram}>
                    <Img
                      src={`${baseUrl}/icon/instagram-30.png`}
                      width="32"
                      height="32"
                      alt="instagram"
                    />
                  </Link>
                  <Link href={siteConfig.links.facebook}>
                    <Img
                      src={`${baseUrl}/icon/facebook-30.png`}
                      width="32"
                      height="32"
                      alt="facebook"
                    />
                  </Link>
                  <Link href={siteConfig.links.twitter}>
                    <Img
                      src={`${baseUrl}/icon/twitter-30.png`}
                      width="32"
                      height="32"
                      alt="twitter"
                    />
                  </Link>
                  <Link href={siteConfig.links.linkedin}>
                    <Img
                      src={`${baseUrl}/icon/linkedin-30.png`}
                      width="32"
                      height="32"
                      alt="linkedin"
                    />
                  </Link>
                </div>
              </Section>

              {/* Footer */}
              <Section className="px-2">
                <Text className="text-center text-gray-500 mt-8">
                  © {currentYear} {siteConfig.name}. All rights reserved.
                </Text>
                <Text className="text-center text-gray-500">
                  {siteConfig.address}
                </Text>
                <Text className="text-center text-gray-500 mt-2">
                  Created by{" "}
                  <Link href={siteConfig.createdByUrl}>
                    {siteConfig.createByName}
                  </Link>
                </Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    </React.Fragment>
  );
};

export { EmailToAmbassadorContactApplication };
