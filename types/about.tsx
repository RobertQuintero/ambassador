import { TestimonialsType } from "./testimonialsType"

// about page types
export type aboutType={
    _createdAt: string,
    _updatedAt: string,
    _id: string,
    image: string,
    company: string,
    introduction: string,
    mission: string,
    vision: string,
    history: string,
    testimonials: TestimonialsType[],
}
