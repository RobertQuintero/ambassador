import React from "react";
import {
    Button,
  Card,
  Chip,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { ArtistsType } from "@/types/artistsType";
import { SocialMediaLink } from "@/components/links/socialMediaLink";
import { paragraph, title } from "@/components/primitives";
import { AgeComponent } from "@/components/time/age";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import SocialMediaShareArtists from "@/components/links/socialMediaShareArtists";


type ArtistCardProps = {
  artists: ArtistsType;
};

const ArtistCard = ({ artists }: ArtistCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <React.Fragment>
      <div className="flex flex-col relative max-w-xl">
        <Card isBlurred isPressable onPress={onOpen} radius="none" className="">
          <Image
            src={artists.portfolioImages[0].image}
            alt={artists.fullName}
            width={1000}
            height={1000}
            radius="none"
            className="rounded-sm"
          />
        </Card>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior="inside"
          radius="sm"
          backdrop="opaque"
          classNames={{
            body: "flex xl:flex-row p-2 sm:p-4 lg:p-6",
            footer: "p-0 ",
            header: "p-0  pb-2",
            closeButton:
              "z-30 bg-default/50 scale-125 rounded-md hover:bg-default/70 text-default-900 hover:text-default-900",
            base: "bg-default/10 max-w-7xl shadow-none backdrop-none",
          }}
        >
          <ModalContent>
          <ModalBody>
              <div className="flex justify-center items-center w-full sm:max-w-md lg:max-w-xl bg-none ">
                <Image
                  src={artists.portfolioImages[0].image}
                  alt={artists.fullName}
                  radius="none"
                  width={"auto"}
                  height={"auto"}
                  className="w-full max-h-80 bg-none sm:max-h-96   xl:max-h-[36rem] object-contain !object-center"
                />
              </div>

              <div className="flex flex-col h-full w-full p-0 md:px-4 lg:px-6 bg-default-50">
                <ModalHeader>
                  <h4 className={` !font-bold ${title({ size: "xl" })}`}>
                    {artists.fullName}
                  </h4>
                </ModalHeader>
                <div className="flex flex-row  justify-between mb-4 ">
                  <div>
                    {artists.dateOfBirth ? (
                      <AgeComponent
                        className={`before:text-default-500 before:font-normal before:text-sm  before:content-['Age__:__'] font-semibold ${paragraph(
                          {
                            size: "sm",
                          }
                        )}`}
                        Date={artists.dateOfBirth}
                      />
                    ) : null}
                  </div>
               <ScrollShadow
                  hideScrollBar
                  className="w-full  max-h-[7rem]  "
                >
              <p
                className={` empty:hidden ${paragraph(
                  { size: "md" }
                )}`}
              >
               {artists.bio}
              </p>
              </ScrollShadow>
                </div>

                {artists.specialties &&
                artists.specialties.length > 0 ? (
                  <div className="flex flex-col mb-4 sm:mb-6">
                    <p
                      className={` font-semibold  ${paragraph(
                        { size: "sm" }
                      )}`}
                    >
                      Specialties
                    </p>
                    <ul className="flex flex-wrap gap-3 py-2">
                      {artists.specialties.map((specialty) => (
                        <li key={specialty}>
                          <Chip variant="dot" radius="sm" color="default">
                            {specialty}
                          </Chip>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}



                <ModalFooter className="">
                  {artists.socialMedia ? (
                      <SocialMediaLink socialMediaLinks={artists.socialMedia} />
                  ) : null}
                    <SocialMediaShareArtists socialMediaShareArtists={artists} />
                </ModalFooter>
              </div>
          </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export { ArtistCard };
