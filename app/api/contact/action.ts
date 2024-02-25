import { useState } from "react";

export const useContactForm = () => {
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

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

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

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsInvalidEmail(!validateEmail(e.target.value));
    checkFormValidity();
  };

  return {
    email,
    setEmail,
    name,
    setName,
    subject,
    setSubject,
    message,
    setMessage,
    isInvalidEmail,
    setIsInvalidEmail,
    isInvalidName,
    setIsInvalidName,
    isInvalidSubject,
    setIsInvalidSubject,
    isInvalidMessage,
    setIsInvalidMessage,
    isLoading,
    setIsLoading,
    isSubmitted,
    setIsSubmitted,
    isFormValid,
    setIsFormValid,
    validateEmail,
    checkFormValidity,
    handleSubmit,
    handleEmailChange,
  };
};