import { ImagesType } from "./imagesType";

export type GalleryType = {
  _createdAt: string;
  _updatedAt: string;
  _id: string;
  galleryTitle: string;
  galleryDate: string;
  galleryDescription: string;
  galleryImages: ImagesType[];
};
