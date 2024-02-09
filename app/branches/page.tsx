


import React from "react";
import { BranchesList } from "./components/branchList";


export const revalidate = 1;

export default async function Branches() {


  return (
    <React.Fragment>
        <BranchesList />
    </React.Fragment>
  );
}
