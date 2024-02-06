import { ImagesType } from "./imagesType";

export type GalleryType = {
  _createdAt: string;
  _updatedAt: string;
  _id: string;
  title: string;
  date: string;
  description: string;
  galleryImages: ImagesType[];
};
