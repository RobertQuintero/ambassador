import { atom } from "jotai";
import { inputAtom, showMoreCountAtom } from "./searchAtoms";
import { getBranchesData } from "@/sanity/utils/sanity-branches";


const branchesAtoms = atom(async () => {
    const branchCard = await getBranchesData();
    return branchCard;
});

console.log(branchesAtoms);

export const filteredBranches = atom(async (get) => {
    const inputValue = get(inputAtom);
    const showMoreCount = get(showMoreCountAtom);
    const branchCard = await get(branchesAtoms);

    const filteredBranches = branchCard.filter((branch) => {
        const branchName = branch.locationName.toLowerCase()
        .includes(inputValue.toLowerCase());
        const branchAddress = branch.address.toLowerCase().includes(inputValue.toLowerCase());
        return branchName && branchAddress;
    });
    return filteredBranches.slice(0, showMoreCount);
});
