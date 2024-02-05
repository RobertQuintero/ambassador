import { Slug } from "sanity";
import { ImagesType } from "./imagesType";

export type ArtistType = {
  _createdAt: string;
  _updatedAt: string;
  _id: string;
  galleryTitle: string;
  galleryDate: string;
  slug: Slug;
  galleryDescription: string;
  galleryImages: ImagesType[];
};
