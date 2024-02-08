"use client";
import React, { useEffect, useState } from 'react';
import { cn } from "@nextui-org/react";
import { CalendarIcon } from '@heroicons/react/24/outline';

function formattedDatePublish(dateString: string | number, isSmallScreen: boolean): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: isSmallScreen ? "short" : "long",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
}

interface DateRangeProps {
  Date: string | number ;
  className?: string;
  props?: any;
  iconClassName?: string;
}

function DateComponent({props, Date, className, iconClassName}: DateRangeProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    // Check if window is defined (i.e., we're in a browser context)
    if (typeof window !== 'undefined') {
      setIsSmallScreen(window.innerWidth < 640);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const formattedDate = formattedDatePublish(Date ?? "", isSmallScreen);

  return (
    <div className={cn("flex flex-wrap gap-2 items-center", className)} {...props}>
      <CalendarIcon className={cn("h-4 w-4 ", iconClassName)} /> {formattedDate}
    </div>
  );
}

export { DateComponent };