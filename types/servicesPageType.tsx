
import { GalleryType } from "./galleryType";

export type ServicesPageType = {
    _createdAt: string;
    _updatedAt: string;
    _id: string;
    title: string;
    description: string;
    subServices: SubServices[];
    gallery: GalleryType[];
    };

export type SubServices = {
    subServiceImage: string;
    subServiceTitle: string;
    };