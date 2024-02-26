"use client";
import InputField from "@/components/customInput/InputField";
import { paragraph, title } from "@/components/primitives";
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
import { CalendarDaysIcon, XMarkIcon } from "@heroicons/react/24/outline";

import "react-calendar/dist/Calendar.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import DateTimePicker from "react-datetime-picker";
import { useBookingForm } from "@/app/api/booking/action";

type BookingFormProps = {
  subServices: SubServices[];
  branches: BranchesType[];
};
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const BookingForm = ({ subServices, branches }: BookingFormProps) => {
   const {
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
  } = useBookingForm();

  return (
    <React.Fragment>
       {!isSubmitted ? (
      <form
        action={useBookingForm}
        className=" flex flex-col gap-4 max-w-4xl mx-auto "
        id="bookingForm"
        onSubmit={handleSubmit}
      >
        {/* // Name  */}
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

        {/* // Email */}
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

        {/* // Mobile Number */}
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

        {/* // Branch Location */}
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
              key={branch.address}
            >
              {branch.locationName}
            </AutocompleteItem>
          )}
        </Autocomplete>

        {/* // Service Type */}
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
                  key={services.subServiceImage}
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

        {/* // Booking Date */}
        <label
          htmlFor="bookingDate"
          className="text-default-600 ml-1 mt-2 text-sm"
        >
          Booking Date<span className="text-danger">*</span>
        </label>
        <DateTimePicker
          name="bookingDate"
          id="bookingDate"
          value={bookingDate}
          required
          onInvalid={(e) => {
            e.preventDefault();
            setIsInvalidBookingDate(true);
          }}
          className={`
          z-10
          !pb-1
          relative
          box-border
          border-b-medium
          border-default-200
          group
          ${bookingDate ? "text-lg" : ""}  ${
            isInvalidBookingDate ? "border-danger" : "border-default-200"
          }`}
          calendarClassName=" !bg-default-100 p-1 md:!p-3 rounded-md shadow-md !border-none text-default-800 "
          yearPlaceholder="yyyy"
          monthPlaceholder="mm"
          dayPlaceholder="dd"
          hourPlaceholder="hh"
          minutePlaceholder="mm"
          secondPlaceholder="ss"
          tileClassName="bg-red-500"
          calendarIcon={
            <CalendarDaysIcon className="w-5 h-5 text-default-300 group-hover:text-default-700 transition-all" />
          }
          clearIcon={
            <XMarkIcon
              className={`w-4 h-4 ${
                bookingDate ? " text-default-500" : "!hidden"
              } hover:text-default-700 transition-all`}
            />
          }
          amPmAriaLabel="Select AM/PM"
          disableClock
          onChange={(value: Value) => {
            setBookingDate(value as Date);
            setIsInvalidBookingDate(!value);
            checkFormValidity();
          }}
        />

        {/* // Notes */}
        <Textarea
          id="message"
          name="message"
          variant="underlined"
          radius="none"
          size="lg"
          value={message}
          isInvalid={isInvalidMessage}
          label="Note"
          isRequired
          errorMessage={
            isInvalidMessage
              ? "Your note should have at least 8 characters "
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
          {isLoading ? "Booking..." : "Book"}
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
            Thank you for booking with us
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
            Your booking has been successfully received. Our team will carefully review your booking details, and we aim to provide you with a confirmation and any further instructions within the next
            <strong className="text-default-700"> 12hrs </strong>. If you have any questions or need assistance, feel free to reach out to us. We appreciate your trust in us and look forward to serving you soon!
            </p>
          </div>
        </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export { BookingForm };
