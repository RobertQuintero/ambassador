import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { ServicePriceList, ServicesPageType, SubServices } from "@/types/servicesPageType";
import { GalleryType } from "@/types/galleryType";
import { ImagesType } from "@/types/imagesType";

export async function getAllSubServicesData(): Promise<SubServices[]> {
  const barbershopData = await getBarbershopPageData();
  const salonData = await getSalonPageData();
  const tattooData = await getTattooPageData();

  const allSubServices = [
    ...barbershopData.subServices,
    ...salonData.subServices,
    ...tattooData.subServices
  ];
  return allSubServices;
}

export async function getAllServicePriceData(): Promise<ServicePriceList[]> {
    const barbershopData = await getBarbershopPageData();
    const salonData = await getSalonPageData();
    const tattooData = await getTattooPageData();

    const allServicePriceList = [
        ...barbershopData.servicePriceList,
        ...salonData.servicePriceList,
        ...tattooData.servicePriceList
    ];
    return allServicePriceList;
    }




export async function getBarbershopPageData(): Promise<ServicesPageType> {
  const data = await client.fetch(groq`*[_type=="barbershop"][0]{...,
        _createdAt,
        _updatedAt,
        _id,
        "image": image.asset->url,
        title,
        description,
        "servicePriceList": servicePriceList[]{
            _id,
            priceTitle,
            servicePrice,
            promoPrice,
            freeService,
        },

        "subServices": subServices[]{
            _id,
            "subServiceImage" : subServiceImage.asset->url,
            subServiceTitle,
        },
        "gallery": *[_type == "gallery"]{
            _id,
            title,
            description,
            date,
            "galleryImages": galleryImages[]{
                _id,
                "image": image.asset->url,
                caption,
            }
        }

    }`);
    return data;
}

export async function getSalonPageData(): Promise<ServicesPageType> {
  const data = await client.fetch(groq`*[_type=="salon"][0]{...,
        _createdAt,
        _updatedAt,
        _id,
        "image": image.asset->url,
        title,
        description,
        "servicePriceList": servicePriceList[]{
            _id,
            priceTitle,
            servicePrice,
            promoPrice,
            freeService,
        },
        "subServices": subServices[]{
            _id,
            "subServiceImage" : subServiceImage.asset->url,
            subServiceTitle,
        },

    }`);
    return data;
}

export async function getTattooPageData(): Promise<ServicesPageType> {
  const data = await client.fetch(groq`*[_type=="tattoo"][0]{...,
        _createdAt,
        _updatedAt,
        _id,
        "image": image.asset->url,
        title,
        description,
        "servicePriceList": servicePriceList[]{
            _id,
            priceTitle,
            servicePrice,
            promoPrice,
            freeService,
        },
        "subServices": subServices[]{
            _id,
            "subServiceImage" : subServiceImage.asset->url,
            subServiceTitle,
        },

    }`);
    return data;
}

