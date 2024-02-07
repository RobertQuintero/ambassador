"use client";

import InputField from "@/components/customInput/InputField";
import { paragraph, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CircularProgress,
  Divider,
  Input,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidName, setIsInvalidName] = useState(false);
  const [isInvalidSubject, setIsInvalidSubject] = useState(false);
  const [isInvalidMessage, setIsInvalidMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const checkFormValidity = () => {
    if (
      validateEmail(email) &&
      /^[a-zA-Z]+$/.test(name) &&
      subject &&
      message.length >= 8
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setIsLoading(true);

    // Validation checks before submitting
    if (
      !validateEmail(email) ||
      !/^[a-zA-Z]+$/.test(name) ||
      !subject ||
      message.length < 8
    ) {
      // Set validation states to display error messages
      setIsInvalidEmail(!validateEmail(email));
      setIsInvalidName(!name);
      setIsInvalidSubject(!subject);
      setIsInvalidMessage(message.length < 8);
      setIsLoading(false);
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true); // Add this line
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });
    if (!response.ok) {
      const text = await response.text();
      console.error("Server response:", text);
      throw new Error("Server response was not ok.");
    } else {
      setIsSubmitted(true);
    }
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsInvalidEmail(!validateEmail(e.target.value));
    checkFormValidity();
  };

  return (
    <React.Fragment>
      {!isSubmitted ? (
        <form
          className=" flex flex-col gap-4 max-w-4xl mx-auto "
          id="ContactForm"
          onSubmit={handleSubmit}
        >
          <p
            className={`text-default-800 !text-center ${title({
              size: "xxl",
            })}`}
          >
            Send us a message
          </p>
          <p
            className={`!text-default-800 mb-4 text-center mx-auto !max-w-xl ${paragraph({
              size: "md",
            })}`}
          >
            "Welcome to {siteConfig.name} ! Before you fill out the form, we
            want to thank you for choosing us. Your satisfaction matters most,
            and we&apos;re here to make sure you leave feeling great. Got any
            questions? Just ask. Let&apos;s get started!"
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
            classNames={{
              inputWrapper:
                message.trim() !== "" ? "border-success " : "danger",
              errorMessage: isInvalidMessage ? "text-danger" : "text-success",
              label:
                message.trim() !== "" ? "text-success" : "text-default-500",
            }}
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
          <p
            className={`!text-default-500 mb-4 text-center ${title({
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
              provide you with a response within the next{" "}
              <strong className="text-warning">14 days</strong>. Please be
              patient during this process, as we strive to give each message
              the attention it deserves.
            </p>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export { ContactForm };
