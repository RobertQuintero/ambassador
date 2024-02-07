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
import { WorksType } from "@/types/worksType";

type socialMediaWorkShareProps = {
  socialMediaShareWork: WorksType;
  className?: string;
  classNameShare?: string;
  size?: string;
};

export default function SocialMediaShareWork({
  socialMediaShareWork,
  className,
  classNameShare,
  size = "w-8 h-8 sm:h-8 sm:h-8 xl:h-10 xl:w-10 rounded-lg",
}: socialMediaWorkShareProps) {
  return (
    <div className={` ${classNameShare}`}>
    <Popover radius="none">
      <PopoverTrigger>
        <Button variant="light" isIconOnly radius="none" aria-label="Share it">
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
            url={`${siteConfig.url}/${String(socialMediaShareWork.slug)}`}
            title={socialMediaShareWork.title}
            className={className}
          >
            <RedditIcon className={` rounded-none ${size}`} />
          </RedditShareButton>
          <LinkedinShareButton
            aria-label="Share on LinkedIn"
            url={`${siteConfig.url}/talents/${String(socialMediaShareWork.slug)}`}
            title={socialMediaShareWork.title}
            className={className}
          >
            <LinkedinIcon className={` rounded-none ${size}`} />
          </LinkedinShareButton>

          <FacebookShareButton
            aria-label="Share on Facebook"
            url={`${siteConfig.url}/talents/${String(socialMediaShareWork.slug)}`}
            quote={socialMediaShareWork.title}
            hashtag={socialMediaShareWork.services
              .map((tag: any) => tag.title)
              .join(", ")}
            className={className}
          >
            <FacebookIcon className={` rounded-none ${size}`} />
          </FacebookShareButton>
          <FacebookMessengerShareButton
            aria-label="Share on Facebook Messenger"
            url={`${siteConfig.url}/talents/${String(socialMediaShareWork.slug)}`}
            appId="1071787503955957"
            className={className}
          >
            <FacebookMessengerIcon className={` rounded-none ${size}`} />
          </FacebookMessengerShareButton>

          <TwitterShareButton
            aria-label="Share on Twitter"
            url={`${siteConfig.url}/talents/${String(socialMediaShareWork.slug)}`}
            title={socialMediaShareWork.title}
            hashtags={socialMediaShareWork.services.map((tag: any) => tag.title)}
            className={className}
          >
            <TwitterIcon className={` rounded-none ${size}`} />
          </TwitterShareButton>
          <PinterestShareButton
            aria-label="Share on Pinterest"
            url={`${siteConfig.url}/talents/${String(socialMediaShareWork.slug)}`}
            media={socialMediaShareWork.portfolioImages[0].image}
            description={socialMediaShareWork.title}
          >
            <PinterestIcon className={` rounded-none ${size}`} />
          </PinterestShareButton>
          <WhatsappShareButton
            aria-label="Share on Whatsapp"
            url={`${siteConfig.url}/talents/${String(socialMediaShareWork.slug)}`}
            title={socialMediaShareWork.title}
          >
            <WhatsappIcon className={` rounded-none ${size}`} />
          </WhatsappShareButton>

          <EmailShareButton
            aria-label="Share on Email"
            url={`${siteConfig.url}/talents/${String(socialMediaShareWork.slug)}`}
            subject={socialMediaShareWork.title}
            body={socialMediaShareWork.portfolioImages[0].image}
            className={className}
          >
            <EmailIcon className={` rounded-none ${size}`} />
          </EmailShareButton>
        </div>
      </PopoverContent>
    </Popover>
    </div>
  );
}

export { SocialMediaShareWork };
