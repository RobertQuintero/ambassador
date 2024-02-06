

import { getBranchesData } from "@/sanity/utils/sanity-branches";
import React from "react";


export const revalidate = 1;

export default async function Branches() {

  const branches = await getBranchesData();

  return (
    <React.Fragment>
        <p>Branches</p>
    </React.Fragment>
  );
}
