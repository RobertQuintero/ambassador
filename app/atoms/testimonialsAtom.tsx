import { atom } from "jotai";
import { inputAtom, showMoreCountAtom } from "./searchAtoms";
import { getTestimonialData } from "@/sanity/utils/sanity-testimonials";



const testimonialsAtoms = atom(async () => {
    const testimonialCard = await getTestimonialData();
    return testimonialCard;
});


export const filteredBranches = atom(async (get) => {
    const showMoreCount = get(showMoreCountAtom);
    const branchCard = await get(testimonialsAtoms);

    const filteredBranches = branchCard.filter((branch) => {

    });
    return filteredBranches.slice(0, showMoreCount);
});
