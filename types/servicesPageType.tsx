
import { GalleryType } from "./galleryType";

export type ServicesPageType = {
    _createdAt: string;
    _updatedAt: string;
    _id: string;
    title: string;
    description: string;
    subServices: SubServices[];
    gallery: GalleryType[];
    servicePriceList: ServicePriceList[];
    };

export type SubServices = {
    subServiceImage: string;
    subServiceTitle: string;
    };

export type ServicePriceList = {
    servicePrice: number;
    priceTitle: string;
    promoPrice: number;
    freeService: string[];
    };