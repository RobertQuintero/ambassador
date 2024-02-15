"use client";
import InputField from "@/components/customInput/InputField";
import { paragraph, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { BranchesType } from "@/types/branchesType";
import { SubServices } from "@/types/servicesPageType";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  CircularProgress,
  Image,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-date-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import DateTimePicker from "react-datetime-picker";

type BookingFormProps = {
  subServices: SubServices[];
  branches: BranchesType[];
};
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const BookingForm = ({ subServices, branches }: BookingFormProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [selectedService, setSelectedService] = useState<React.Key | null>(null);

  const [selectedBranch, setSelectedBranch] = useState<React.Key | null>(null);
  const [branch, setBranch] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [touched, setTouched] = React.useState(false);
  const [message, setMessage] = useState("");

  const [isInvalidMobileNumber, setIsInvalidMobileNumber] = useState(false);
  const [isInvalidBookingDate, setIsInvalidBookingDate] = useState(false);
  const [isInvalidService, setIsInvalidService] = useState(false);
  const [isInvalidBranch, setIsInvalidBranch] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidName, setIsInvalidName] = useState(false);
  const [isInvalidMessage, setIsInvalidMessage] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);


  // render regular HTML input element
  const onSelectedServiceChange = (key: React.Key) => {
    setSelectedService(key);
  }
  const onInputServiceChange = (value:string) => {
    setService(value);
  }

  const onSelectedBranchChange = (key: React.Key) => {
    setSelectedBranch(key);
  }
  const onInputBranchChange = (value:string) => {
    setBranch(value);
  }

  const [bookingDate, setBookingDate] = useState<Value>(new Date());

  const checkFormValidity = () => {
    if (
      validateEmail(email) &&
      /^[a-zA-Z]+$/.test(name) &&
      // number only validation
      /^[0-9]+$/.test(mobileNumber) &&
      service &&
      branch &&
      bookingDate &&
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
      !/^[0-9]+$/.test(mobileNumber) ||
      !service ||
      !branch ||
      !bookingDate ||
      message.length < 8
    ) {
      // Set validation states to display error messages
      setIsInvalidMobileNumber(!/^[0-9]+$/.test(mobileNumber));
      setIsInvalidBookingDate(!bookingDate);
      setIsInvalidService(!service);
      setIsInvalidBranch(!branch);
      setIsInvalidEmail(!validateEmail(email));
      setIsInvalidName(!name);
      setIsInvalidMessage(message.length < 8);
      setIsLoading(false);
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true); // Add this line
    const response = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        branch,
        service,
        mobileNumber,
        bookingDate,
        message,
      }),
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
      <form
        className=" flex flex-col gap-4 max-w-4xl mx-auto mb-96"
        id="ContactForm"
        onSubmit={handleSubmit}
      >
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
          id="mobileNumber"
          name="mobileNumber"
          label="Mobile Number"
          isInvalid={isInvalidMobileNumber}
          errorMessage={
            isInvalidMobileNumber ? "Please enter a valid phone number " : ""
          }
          value={mobileNumber}
          onChange={(e) => {
            setMobileNumber(e.target.value);
            setIsInvalidMobileNumber(!/^[0-9]+$/.test(e.target.value));
            checkFormValidity();
          }}
        />

        <Autocomplete
          defaultItems={subServices}
          label="Service Type"
          variant="underlined"
          isRequired
          size="lg"
          radius="md"
          value={service}
          id="service"
          name="service"
          errorMessage={isInvalidService ? "Please select a service" : ""}
          isInvalid={isInvalidService}
          classNames={{ popoverContent: "rounded-md" }}
          onClose={() => setTouched(true)}
          color={isInvalidService ? "danger" : "default"}
          onSelectionChange={onSelectedServiceChange}
          onInputChange={onInputServiceChange}
        >
          {(services) => (
            <AutocompleteItem
              startContent={
                <Image
                  src={services.subServiceImage}
                  width={50}
                  height={50}
                  className="w-6 h-6 dark:invert "
                />
              }
              classNames={{ title: "font-semibold capitalize" }}
              key={services.subServiceTitle}
            >
              {services.subServiceTitle}
            </AutocompleteItem>
          )}
        </Autocomplete>

        <Autocomplete
          isRequired
          defaultItems={branches}
          label="Branch Location"
          variant="underlined"
          size="lg"
          radius="md"
          value={branch}
          id="branch"
          name="branch"
          errorMessage={isInvalidBranch ? "Please select a branch" : ""}
          isInvalid={isInvalidBranch}
          classNames={{ popoverContent: "rounded-md" }}
          onClose={() => setTouched(true)}
          color={isInvalidBranch ? "danger" : "default"}
          onSelectionChange={onSelectedBranchChange}
          onInputChange={onInputBranchChange}
        >
          {(branch) => (
            <AutocompleteItem
              description={branch.address}
              classNames={{ title: "font-semibold capitalize" }}
              key={branch.locationName}
            >
              {branch.locationName}
            </AutocompleteItem>
          )}
        </Autocomplete>

         <DateTimePicker
          onChange={setBookingDate} value={bookingDate}
          calendarClassName="!bg-black dark:!bg-dark-500 "



          />

        <Textarea
          id="message"
          name="message"
          variant="underlined"
          radius="none"
          size="lg"
          value={message}
          isInvalid={isInvalidMessage}
          label="Notes"
          isRequired
          errorMessage={
            isInvalidMessage
              ? "Your story should have at least 8 characters "
              : ""
          }
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
    </React.Fragment>
  );
};

export { BookingForm };
