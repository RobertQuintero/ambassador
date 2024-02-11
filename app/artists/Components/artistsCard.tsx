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
import { ArrowLongRightIcon, MapIcon, SwatchIcon } from "@heroicons/react/24/solid";
import SocialMediaShareArtists from "@/components/links/socialMediaShareArtists";

type ArtistCardProps = {
  artists: ArtistsType;
};

const ArtistCard = ({ artists }: ArtistCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <React.Fragment>
      <div className="flex flex-col relative max-w-xl">
        <Card isBlurred isPressable onPress={onOpen} radius="none" className="" shadow="none">
          <Image
            src={artists.portfolioImages[0].image}
            alt={artists.fullName}
            width={1000}
            height={1000}
            radius="none"
            shadow="none"
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
            body: "flex md:flex-row p-2 sm:p-4 lg:p-6",
            footer: "p-0 flex-col gap-2 md:gap-4",
            header: "p-0  ",
            closeButton:
              "z-30 bg-default/50 scale-125 rounded-md hover:bg-default/70 text-default-900 hover:text-default-900",
            base: "bg-default/10 max-w-5xl shadow-none backdrop-none hideScroll",
          }}
        >
          <ModalContent>
            <ModalBody>
              <div className="flex justify-center items-center w-full sm:max-w-md lg:max-w-xl bg-none ">
                <Image
                  src={artists.portfolioImages[0].image}
                  alt={artists.fullName}
                  radius="sm"
                  width={"auto"}
                  height={"auto"}
                  className="w-full bg-none sm:h-[50vh] object-contain !object-center"
                />
              </div>

              <div className="flex flex-col h-full w-full p-2 md:p-4 xl:p-6 bg-default-50 rounded-sm">
                <ModalHeader>
                  <h4
                    className={` !font-bold capitalize ${title({
                      size: "xl",
                    })}`}
                  >
                    {artists.fullName}
                  </h4>
                </ModalHeader>
                <div className="flex flex-col  justify-between my-4  gap-2 md:gap-4">
                  <ScrollShadow
                    hideScrollBar
                    className="w-full  max-h-[7rem] pb-1"
                  >
                    <p className={` empty:hidden ${paragraph({ size: "md" })}`}>
                      {artists.bio}
                    </p>
                  </ScrollShadow>
                  {artists.locationName && artists.locationName.length > 0 ? (
                    <div className="flex flex-row items-center">
                    <MapIcon className="min-w-[1.25rem] h-[1.25rem] md:min-w-[1.5rem] md:min-h-[1.5rem] mr-2 text-default-700 self-start " />
                      <ul className="flex flex-wrap gap-3 ">
                        {artists.locationName.map((branches) => (
                          <li key={branches.locationName}>
                            <Chip
                              variant="flat"
                              radius="full"
                              color="default"
                              size="md"
                              classNames={{content: "text-default-700  !font-semibold"}}
                            >
                              {branches.locationName}
                            </Chip>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {artists.specialties && artists.specialties.length > 0 ? (
                    <div className="flex flex-row items-center">
                    <SwatchIcon className="min-w-[1.25rem] h-[1.25rem] md:min-w-[1.5rem] md:min-h-[1.5rem] mr-2 text-default-700 self-start mt-0.5" />
                      <ul className="flex flex-wrap gap-3 ">
                        {artists.specialties.map((specialty) => (
                          <li key={specialty}>
                            <Chip
                              variant="dot"
                              radius="sm"
                              color="default"
                              size="lg"
                              classNames={{content: "text-default-700 capitalize !font-semibold"}}
                            >
                              {specialty}
                            </Chip>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                </div>
                <ModalFooter>
                  <div className="flex flex-wrap gap-2 self-end">
                    {artists.socialMedia ? (
                      <SocialMediaLink socialMediaLinks={artists.socialMedia} />
                    ) : null}
                    <SocialMediaShareArtists
                      socialMediaShareArtists={artists}
                    />
                  </div>
                  <Button
                    as={Link}
                    href={`/artists/${artists.slug}`}
                    endContent={
                      <ArrowLongRightIcon className="w-4 h-4 md:w-5 md:h-5" />
                    }
                    radius="sm"
                    className="w-full font-semibold "
                    color="default"
                  >
                    View Portfolio
                  </Button>
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
