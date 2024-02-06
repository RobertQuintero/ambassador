import { Slug } from "sanity";
import { SocialMediaType } from "./socialMediaType";

export type ArtistType = {
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
};
