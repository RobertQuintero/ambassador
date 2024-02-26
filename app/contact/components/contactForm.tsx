"use client";

import { useContactForm } from "@/app/api/contact/action";
import InputField from "@/components/customInput/InputField";
import { paragraph, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import {
  Button,
  CircularProgress,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";

const ContactForm = () => {
  const {
    email,
    name,
    setName,
    subject,
    setSubject,
    message,
    setMessage,
    isInvalidEmail,
    isInvalidName,
    setIsInvalidName,
    isInvalidSubject,
    setIsInvalidSubject,
    isInvalidMessage,
    setIsInvalidMessage,
    isLoading,
    isSubmitted,
    isFormValid,
    checkFormValidity,
    handleSubmit,
    handleEmailChange,
  } = useContactForm();




  return (
    <React.Fragment>
      {!isSubmitted ? (
        <form action={useContactForm} onSubmit={handleSubmit}
          className=" flex flex-col gap-4 max-w-4xl mx-auto "
          id="ContactForm"

        >
          <p
            className={`text-default-800 !text-center ${title({
              size: "xxl",
            })}`}
          >
            Send us a message
          </p>
          <p
            className={`!text-default-500 mb-4 text-center mx-auto !max-w-xl ${paragraph({
              size: "md",
            })}`}
          >
            &quot;Welcome to {siteConfig.name} ! Before you fill out the form, we
            want to thank you for choosing us. Your satisfaction matters most,
            and we&apos;re here to make sure you leave feeling great. Got any
            questions? Just ask. Let&apos;s get started!&quot;
          </p>
          <InputField
            type="text"
            id="name"
            name="name"
            label="Name"
            isInvalid={isInvalidName}
            errorMessage={isInvalidName ? "Please enter your name" : ""}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setIsInvalidName(!/^[a-zA-Z]+$/.test(e.target.value));
              checkFormValidity();
            }}
          />
          <InputField
            type="email"
            id="email"
            name="email"
            label="Email"
            isInvalid={isInvalidEmail}
            errorMessage={isInvalidEmail ? "Please enter a valid email" : ""}
            value={email}
            onChange={handleEmailChange}
          />
          <InputField
            type="text"
            id="subject"
            name="subject"
            label="Subject"
            isInvalid={isInvalidSubject}
            errorMessage={isInvalidSubject ? "Please enter a subject" : ""}
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              setIsInvalidSubject(!e.target.value);
              checkFormValidity();
            }}
          />
          <Textarea
            id="message"
            name="message"
            variant="underlined"
            radius="none"
            size="lg"
            value={message}
            isInvalid={isInvalidMessage}
            label="Message"
            isRequired
            errorMessage={
              isInvalidMessage
                ? "Your story should have at least 8 characters "
                : ""
            }
            className="col-span-2"
            color={isInvalidMessage ? "danger" : "default"}
            onChange={(e) => {
              setMessage(e.target.value);
              setIsInvalidMessage(e.target.value.length < 8);
              checkFormValidity();
            }}
          />

          <Button
            color="default"
            variant={isFormValid ? "solid" : "flat"} // Update this line
            type="submit"
            radius="none"
            size="lg"
            isDisabled={!isFormValid}
            startContent={
              isLoading ? (
                <CircularProgress
                  color="default"
                  aria-label="Loading..."
                  classNames={{ svg: "w-4 h-4" }}
                />
              ) : (
                ""
              )
            }
          >
            {isLoading ? "Sending..." : "Send"}
          </Button>
        </form>
      ) : (
        <React.Fragment>
        <div className="flex flex-col mx-auto ">
          <p
            className={`!text-default-500 mb-4 text-center mx-auto  ${title({
              size: "md",
            })}`}
          >
            Thank you for your message!
          </p>
          <div className="p-4 flex flex-col items-center justify-center w-full h-full max-w-lg relative animate-appearance-in  mx-auto">
            <div className="w-24 h-24 rounded-full  bg-default/25 border border-default-500 animate-pulse relative z-20" />
            <div className="w-16 h-16 rounded-full  animate-ping border border-default-500 absolute top-8 -z-10" />
            <div className="w-12 h-12 rounded-full  animate-ping border border-default-500 delay-300 duration-300 absolute top-10 -z-10" />
            <CheckBadgeIcon className="w-16 h-16 text-default-800  absolute top-8 animate-appearance-in drop-shadow-lg" />
            <p
              className={`!text-default-500 text-center mt-4 ${paragraph({
                size: "sm",
              })}`}
            >
              Our team will now carefully assess your message, and we aim to
              provide you with a response within the next
              <strong className="text-default-700"> 7 days</strong>. Please be
              patient during this process, as we strive to give each message
              the attention it deserves.
            </p>
          </div>
        </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export { ContactForm };
