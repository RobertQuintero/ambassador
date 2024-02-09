import { Slug } from "sanity";
import { SocialMediaType } from "./socialMediaType";
import { ImagesType } from "./imagesType";

export type ArtistsType = {
  _createdAt: string;
  _updatedAt: string;
  _id: string;
  slug: Slug;
  fullName: string;
  dateOfBirth: string;
  gender: string;
  bio: string;
  specialties: string[];
  socialMedia: SocialMediaType[];
  portfolioImages: ImagesType[];
};
