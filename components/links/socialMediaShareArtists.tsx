"use client";
import { ShareIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  PinterestIcon,
  PinterestShareButton,
  LinkedinShareButton,
  RedditShareButton,
  LinkedinIcon,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailIcon,
  EmailShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "next-share";
import { paragraph, title } from "../primitives";
import { siteConfig } from "@/config/site";
import { ArtistsType } from "@/types/artistsType";


type socialMediaTalentShareProps = {
  socialMediaShareArtists: ArtistsType;
  className?: string;
  size?: string;
};

export default function SocialMediaShareArtists({
  socialMediaShareArtists,
  className,
  size = "w-8 h-8 sm:h-8 sm:h-8 xl:h-10 xl:w-10 rounded-lg",
}: socialMediaTalentShareProps) {
  return (
    <Popover radius="sm">
      <PopoverTrigger>
        <Button variant="light" isIconOnly radius="sm" aria-label="Share it">
          <ShareIcon color="primary" className="text-default-600 w-5 h-5 md:w-6 md:h-6" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-2">
        <div className="flex flex-wrap gap-2 ">
          <div className="flex flex-col self-start ">
            <p className={` ${title({ size: "sm" })}`}>Share this </p>
            <p className={` ${paragraph({ size: "xs" })}`}>to your friends</p>
          </div>
          <RedditShareButton
            url={`${siteConfig.url}/talents/${String(socialMediaShareArtists.slug)}`}
            title={socialMediaShareArtists.fullName}
            className={className}
          >
            <RedditIcon className={` rounded-sm ${size}`} />
          </RedditShareButton>
          <LinkedinShareButton
            aria-label="Share on LinkedIn"
            url={`${siteConfig.url}/talents/${String(socialMediaShareArtists.slug)}`}
            title={socialMediaShareArtists.fullName}
            className={className}
          >
            <LinkedinIcon className={` rounded-sm ${size}`} />
          </LinkedinShareButton>

          <FacebookShareButton
            aria-label="Share on Facebook"
            url={`${siteConfig.url}/talents/${String(socialMediaShareArtists.slug)}`}
            quote={socialMediaShareArtists.fullName}
            hashtag={socialMediaShareArtists.specialties
              .map((tag: any) => tag.title)
              .join(", ")}
            className={className}
          >
            <FacebookIcon className={` rounded-sm ${size}`} />
          </FacebookShareButton>
          <FacebookMessengerShareButton
            aria-label="Share on Facebook Messenger"
            url={`${siteConfig.url}/talents/${String(socialMediaShareArtists.slug)}`}
            appId="1071787503955957"
            className={className}
          >
            <FacebookMessengerIcon className={` rounded-sm ${size}`} />
          </FacebookMessengerShareButton>

          <TwitterShareButton
            aria-label="Share on Twitter"
            url={`${siteConfig.url}/talents/${String(socialMediaShareArtists.slug)}`}
            title={socialMediaShareArtists.fullName}
            hashtags={socialMediaShareArtists.specialties.map((tag: any) => tag.title)}
            className={className}
          >
            <TwitterIcon className={` rounded-sm ${size}`} />
          </TwitterShareButton>
          <PinterestShareButton
            aria-label="Share on Pinterest"
            url={`${siteConfig.url}/talents/${String(socialMediaShareArtists.slug)}`}
            media={socialMediaShareArtists.portfolioImages[0].image}
            description={socialMediaShareArtists.fullName}
          >
            <PinterestIcon className={` rounded-sm ${size}`} />
          </PinterestShareButton>
          <WhatsappShareButton
            aria-label="Share on Whatsapp"
            url={`${siteConfig.url}/talents/${String(socialMediaShareArtists.slug)}`}
            title={socialMediaShareArtists.fullName}
          >
            <WhatsappIcon className={` rounded-sm ${size}`} />
          </WhatsappShareButton>

          <EmailShareButton
            aria-label="Share on Email"
            url={`${siteConfig.url}/talents/${String(socialMediaShareArtists.slug)}`}
            subject={socialMediaShareArtists.fullName}
            body={socialMediaShareArtists.portfolioImages[0].image}
            className={className}
          >
            <EmailIcon className={` rounded-sm ${size}`} />
          </EmailShareButton>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export { SocialMediaShareArtists };
