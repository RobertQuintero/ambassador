import { atom } from "jotai";
import { showMoreCountAtom } from "./searchAtoms";
import { getTestimonialData } from "@/sanity/utils/sanity-testimonials";



const testimonialsAtoms = atom(async () => {
    const testimonialCard = await getTestimonialData();
    return testimonialCard;
});


export const filteredTestimonials = atom(async (get) => {
    const showMoreCount = get(showMoreCountAtom);
    const testimonialCard = await get(testimonialsAtoms);
    return testimonialCard.slice(0, showMoreCount);
});