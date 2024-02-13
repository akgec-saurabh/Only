import { cn } from "@/lib/utils";
import React from "react";

interface BorderProps {
  variant?: "light" | "dark";
}

const Border: React.FC<BorderProps> = ({ variant }) => {
  return (
    <div
      className={cn(
        "h-[0.2px] w-full",
        variant === "dark" ? "bg-stone-700" : "bg-gray-200",
      )}
    ></div>
  );
};

export default Border;
