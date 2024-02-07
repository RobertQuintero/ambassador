
import React from "react";
import { ContactForm } from "./components/contactForm";
import { AddressSocialMediaLinks } from "./components/addressSocialMediaLinks";

export const revalidate = 1;

export default async function Contact() {

  return (
    <React.Fragment>
        <AddressSocialMediaLinks />
        <ContactForm />
    </React.Fragment>
  );
}
