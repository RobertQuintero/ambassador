// InputField.tsx

import { Input } from "@nextui-org/input";
import React, { ChangeEvent } from "react";

interface InputFieldProps {
  type: string;
  id: string;
  name: string;
  label: string;
  isInvalid?: boolean;
  errorMessage?: string;
  value: string;
  endContent?: React.ReactNode;
  description?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  id,
  name,
  label,
  isInvalid = false,
  errorMessage = "",
  value,
  endContent,
  description: des,
  onChange,
}: InputFieldProps) => {
  return (
    <Input
      type={type}
      id={id}
      name={name}
      label={label}
      isRequired
      variant="underlined"
      radius="none"
      size="lg"
      description={des}
      value={value}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      classNames={{
        inputWrapper: value.trim() !== "" ? "border-success " : "danger",
        errorMessage: isInvalid ? "text-danger" : "text-success",
        label: value.trim() !== "" ? "text-success" : "text-default-500",
      }}
      color={isInvalid ? "danger" : "default"}
      onChange={onChange}
      endContent={
        <div className="pointer-events-none flex items-center mb-2 ">
          <span className="text-default-400 font-bold text-base">{endContent}</span>
        </div>
      }
    />
  );
};

export default InputField;
