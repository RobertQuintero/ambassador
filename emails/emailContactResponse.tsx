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

type EmailContactResponseProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const EmailContactResponse: React.FC<EmailContactResponseProps> = ({
  name,
  email,
  message,
  subject,
}: EmailContactResponseProps) => {
  const baseUrl = siteConfig.url ? `${siteConfig.url}` : "";
  const previewText = `Thank you, ${name}! Your Inquiry has been Received.`;
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
                Thank You for Your Inquiry, {name}!
              </Heading>
              <Text className="text-2xl font-bold text-center ">
                Your inquiry has been received, and we appreciate your interest.
              </Text>

              <Section className="px-6">
                <Text className="text-base">
                  Dear <strong>{name}</strong>,
                </Text>
                <Text>
                  Thank you for reaching out with your inquiry to{" "}
                  <strong>{siteConfig.name}</strong>. We appreciate your
                  interest and the opportunity to assist you.
                </Text>
                <Text>
                  We have received your inquiry and our team is eager to address
                  your questions and provide the information you are seeking.
                  Your detailed message has given us a better understanding of
                  your needs, and we are committed to assisting you in the best
                  way possible.
                </Text>
                <Text>
                  Our team will carefully review your inquiry, and we aim to
                  provide you with a response within the next{" "}
                  <strong>48 hours</strong>. We understand the importance of
                  your inquiry and want to ensure that we address it promptly.
                </Text>
                <Text>
                  In the meantime, if there are any additional details or
                  specific points you&apos;d like to emphasize, please feel free
                  to respond to this email or use our online portal to provide
                  further information.
                </Text>
                <Text>
                  Thank you once again for considering {siteConfig.name}. We
                  value the opportunity to assist you and look forward to
                  connecting with you soon.
                </Text>
              </Section>

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

              <EmailFooter />
            </Container>
          </Body>
        </Tailwind>
      </Html>
    </React.Fragment>
  );
};

export { EmailContactResponse };
