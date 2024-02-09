import { SocialMediaType } from "./socialMediaType";

export type BranchesType={
    _createdAt: string,
    _updatedAt: string,
    _id: string,
    locationName: string,
    address: string,
    email: string,
    mobile: string,
    telephone: string,
    socialMedia: SocialMediaType[],
}
