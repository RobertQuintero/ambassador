import React from "react";
import { Chip, Tooltip } from "@nextui-org/react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { createdAtData, updatedAtData } from "@/types/createdAt";


function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month.toString().padStart(2, '0')} ${day.toString().padStart(2, '0')}, ${year}`;
}
function formatRelativeDate(dateString: string | number | Date) {
  const date: any = new Date(dateString);
  const now: any = new Date();

  const millisecondsDiff = now - date;
  const daysDiff = Math.floor(millisecondsDiff / (24 * 60 * 60 * 1000));
  const weeksDiff = Math.floor(daysDiff / 7);
  const monthsDiff =
    now.getMonth() -
    date.getMonth() +
    12 * (now.getFullYear() - date.getFullYear());
  const yearsDiff = now.getFullYear() - date.getFullYear();

  if (daysDiff === 0) {
    return "today";
  } else if (daysDiff === 1) {
    return "yesterday";
  } else if (daysDiff <= 6) {
    return `${daysDiff} days ago`;
  } else if (weeksDiff === 1) {
    return "1 week ago";
  } else if (weeksDiff > 1 && weeksDiff <= 3) {
    return `${weeksDiff} weeks ago`;
  } else if (monthsDiff === 1) {
    return "1 month ago";
  } else if (monthsDiff > 1 && monthsDiff <= 12) {
    return `${monthsDiff} months ago`;
  } else if (yearsDiff === 1) {
    return "1 year ago";
  } else if (yearsDiff > 1) {
    return `${yearsDiff} years ago`;
  } else {
    return "in the future";
  }
}

interface CreatedAtsProps {
  createdAt: createdAtData;
  updatedAt: updatedAtData;
  size?: "sm" | "md" | "lg";
  className?: string;
  isNewlyCreated?: boolean;
}

function CreatedAt({ className, createdAt, updatedAt, size = "md", isNewlyCreated = false }: CreatedAtsProps) {
  const creationDate = formatDate(createdAt._createdAt);
  const updateDate = updatedAt ? formatDate(updatedAt._updatedAt) : null;

  const isUpdateSameAsCreation = updateDate && creationDate === updateDate;

  const dateToDisplay = isUpdateSameAsCreation ? creationDate : (updateDate || creationDate);
  const relativeDate = formatRelativeDate(dateToDisplay);

  const content = isUpdateSameAsCreation ? (
    <p className="text-semibold before:text-default-500 before:text-sm before:content-['Published_on__:__'] empty:hidden">
      {formatDate(createdAt._createdAt)}
    </p>
  ) : (
    <div className="flex flex-col">
      <p className="text-semibold before:text-default-500 before:text-sm before:content-['Updated_on__:__'] empty:hidden">
        {formatDate(updatedAt._updatedAt)}
      </p>
      <p className="text-semibold before:text-default-500 before:text-sm before:content-['Published_on__:__'] empty:hidden">
        {formatDate(createdAt._createdAt)}
      </p>
    </div>
  );


  return (
    <Tooltip
      size={size}
      showArrow={true}
      content={<div className="flex flex-col">{content}</div>}
    >
      <Chip
        size={size}
        variant="light"
        className={`!text-default-500 p-0 gap-[0.18rem] ${className}`}
        startContent={<CalendarIcon className="w-3.5 h-3.5  sm:w-4 sm:h-4" />}
      >
        {relativeDate}
      </Chip>
    </Tooltip>
  );
}

export { CreatedAt };
