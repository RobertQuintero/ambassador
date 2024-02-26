// api/action.tsx

import React from "react";
import { useState } from "react";


export const useBookingForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [selectedService, setSelectedService] = useState<React.Key | null>(
    null
  );

  const [selectedBranch, setSelectedBranch] = useState<React.Key | null>(null);
  const [branch, setBranch] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [touched, setTouched] = React.useState(false);
  const [message, setMessage] = useState("");

  const [isInvalidMobileNumber, setIsInvalidMobileNumber] = useState(false);
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
  };
  const onInputServiceChange = (value: string) => {
    setService(value);
  };

  const onSelectedBranchChange = (key: React.Key) => {
    setSelectedBranch(key);
  };
  const onInputBranchChange = (value: string) => {
    setBranch(value);
  };

  const [bookingDate, setBookingDate] = useState<Date | null>(null);
  const [isInvalidBookingDate, setIsInvalidBookingDate] = useState(false);

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
 return {
    email,
    name,
    service,
    selectedService,
    selectedBranch,
    branch,
    mobileNumber,
    touched,
    message,
    isInvalidMobileNumber,
    isInvalidService,
    isInvalidBranch,
    isInvalidEmail,
    isInvalidName,
    isInvalidMessage,
    isLoading,
    isSubmitted,
    isFormValid,
    bookingDate,
    isInvalidBookingDate,
    onSelectedServiceChange,
    onInputServiceChange,
    onSelectedBranchChange,
    onInputBranchChange,
    setTouched,
    setBookingDate,
    setIsLoading,
    setIsSubmitted,
    setIsFormValid,
    setEmail,
    setName,
    setService,
    setBranch,
    setMobileNumber,
    setMessage,
    setIsInvalidBookingDate,
    setIsInvalidMobileNumber,
    setIsInvalidService,
    setIsInvalidBranch,
    setIsInvalidEmail,
    setIsInvalidName,
    setIsInvalidMessage,
    validateEmail,
    checkFormValidity,
    handleSubmit,
    handleEmailChange,
  };
};