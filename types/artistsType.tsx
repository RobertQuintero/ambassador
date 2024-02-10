import { Slug } from "sanity";
import { SocialMediaType } from "./socialMediaType";
import { ImagesType } from "./imagesType";
import { BranchesType } from "./branchesType";

export type ArtistsType = {
  _createdAt: string;
  _updatedAt: string;
  _id: string;
  slug: Slug;
  fullName: string;
  dateOfBirth: string;
  locationName: BranchesType[];
  gender: string;
  bio: string;
  specialties: string[];
  socialMedia: SocialMediaType[];
  portfolioImages: ImagesType[];
};
