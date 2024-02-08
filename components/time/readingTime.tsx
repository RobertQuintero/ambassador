import { Chip, Tooltip, cn } from "@nextui-org/react";
import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

type ReadingTimeCalculatorProps = {
  text: string;
  averageWordsPerMinute?: number;
  className?: string;
  props?: any;
  size?: "sm" | "md" | "lg";
};

function extractTextFromBlocks(blocks: any[]) {
  let text = "";
  if (Array.isArray(blocks)) {
    // Check if blocks is an array
    blocks.forEach((block) => {
      if (block._type === "block" && block.children) {
        block.children.forEach((child: { text: string }) => {
          if (child.text) {
            text += child.text;
          }
        });
      }
    });
  }
  return text;
}

function ReadingTime({
  text,
  size = "md",
  className,
  props,
  averageWordsPerMinute = 200,
}: ReadingTimeCalculatorProps) {
  const calculateReadingTime = (
    text: string,
    averageWordsPerMinute: number
  ) => {
    const words = (text ?? "").split(/\s+/).length;
    const readingTimeMinutes = words / averageWordsPerMinute;
    return Math.ceil(readingTimeMinutes); // Round up to the nearest minute
  };

  const readingTime = calculateReadingTime(text, averageWordsPerMinute);

  return (
    <Tooltip
      size={size}
      showArrow={true}
      content={
        <p className="text-semibold before:text-default-500 before:text-sm before:content-['Estimated_Time_to_Read__:__'] empty:hidden">
          {readingTime} minute
          {readingTime !== 1 ? "s" : ""}
        </p>
      }
    >
      <Chip
        size={size}
        variant="light"
        className={`!text-default-500  p-0 ml-1 ${className}`}
        startContent={<ClockIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
      >
        {readingTime} min{readingTime !== 1 ? "s" : ""} read
      </Chip>
    </Tooltip>
  );
}

export { ReadingTime, extractTextFromBlocks };
