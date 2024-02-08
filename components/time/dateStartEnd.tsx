import React from 'react';
import{cn } from "@nextui-org/react";
import { CalendarIcon } from '@heroicons/react/24/outline';

function formatStartDateAndEndDate(dateString: string | number): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  return date.toLocaleDateString(undefined, options);
}

interface DateRangeProps {
  startDate: string | number ;
  endDate: string | number ;
    className?: string;
    props?: any;
    iconClassName?: string;
}

function DateRangeComponent( {props, startDate, endDate, className,iconClassName }: DateRangeProps) {

  const formattedStartDate = formatStartDateAndEndDate(startDate??"");
  const formattedEndDate = formatStartDateAndEndDate(endDate??"");

  return (

    <div className={cn("flex flex-wrap gap-2 items-center",className)} {...props}>
     <CalendarIcon className={cn("h-4 w-4 ",iconClassName)}/> {formattedStartDate} - {formattedEndDate}
    </div>
  );
}

export  {DateRangeComponent};
