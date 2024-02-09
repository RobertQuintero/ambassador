import React from "react";
import { BranchesList } from "./components/branchList";
import { BranchHeader } from "./components/branchHeader";


export const revalidate = 1;

export default async function Branches() {


  return (
    <React.Fragment>
        <BranchHeader />
        <BranchesList />
    </React.Fragment>
  );
}
