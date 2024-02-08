import React from "react";
import { cn } from "@nextui-org/react";

function calculateAge(dateString: string | number): number {
  const birthDate = new Date(dateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

interface DateRangeProps {
  Date: string | number;
  className?: string;
  props?: any;
  iconClassName?: string;
}

function AgeComponent({
  props,
  Date,
  className,
  iconClassName,
}: DateRangeProps) {
  const age = calculateAge(Date ?? "");

  return (
    <div
      className={cn("flex flex-wrap gap-2 items-center", className)}
      {...props}
    >
      <p
        className={cn(
          "",
          iconClassName
        )}
      />{age}</div>
  );
}

export { AgeComponent };
