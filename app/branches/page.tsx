import React from "react";
import { BranchesList } from "./components/branchList";
import { BranchHeader } from "./components/branchHeader";

// Revalidate the data 7 days
export const revalidate = 60 * 60 * 24 * 7;

export default async function Branches() {


  return (
    <React.Fragment>
        <BranchHeader />
        <BranchesList />
    </React.Fragment>
  );
}
