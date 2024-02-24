import { GalleryType } from "./galleryType";

// home page types
export type HomeType={
    _createdAt: string,
    _updatedAt: string,
    _id: string,
    title: string,
    introduction: string,
    gallery: GalleryType[];

}
