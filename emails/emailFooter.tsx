
import React from "react";
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





const EmailFooter : React.FC = () => {
  const currentYear = new Date().getFullYear();
  const baseUrl = siteConfig.url ? `${siteConfig.url}` : "";
    return(
    <React.Fragment>
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
                    src={`${baseUrl}/icon/AmbassadorLogoDark.png`}
                    width="170"
                    height="70"
                    alt={siteConfig.name}
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
                      Home
                    </Link>
                  </Column>
                  <Column align="center">
                    <Link
                      href={`${baseUrl}/about`}
                      className="text-black font-bold underline"
                      target="_blank"
                    >
                      Branches
                    </Link>
                  </Column>
                  <Column align="center">
                    <Link
                      href={`${baseUrl}/branches`}
                      className="text-black font-bold underline"
                      target="_blank"
                    >
                      Branches
                    </Link>
                  </Column>
                  <Column align="center">
                    <Link
                      href={`${baseUrl}/contact`}
                      className="text-black font-bold underline"
                      target="_blank"
                    >
                      Contact us
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
    </React.Fragment>
)
}
export default EmailFooter;