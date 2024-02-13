"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "../Button";
import { cn } from "@/lib/utils";

interface productDetailHeadingProps {
  detailHeading: number;
  setDetailHeading: Dispatch<SetStateAction<number>>;
}

const ProductDetailHeading: React.FC<productDetailHeadingProps> = ({
  detailHeading,
  setDetailHeading,
}) => {
  return (
    <div className="flex flex-col justify-center gap-16 lg:flex-row ">
      <Button
        onClick={() => setDetailHeading(0)}
        variant="secondary"
        className={cn(
          "max-w-max px-2 text-base",
          detailHeading === 0
            ? "underline-effect"
            : "hover-effect-full text-gray-500 ",
        )}
      >
        DESCRIPTION
      </Button>
      <Button
        onClick={() => setDetailHeading(1)}
        variant="secondary"
        className={cn(
          "max-w-max px-2 text-base",
          detailHeading === 1
            ? "underline-effect"
            : "hover-effect-full text-gray-500",
        )}
      >
        ADDITIONAL INFORMATION
      </Button>
      <Button
        onClick={() => setDetailHeading(2)}
        variant="secondary"
        className={cn(
          "max-w-max px-2 text-base",
          detailHeading === 2
            ? "underline-effect"
            : "hover-effect-full text-gray-500",
        )}
      >
        REVIEWS
      </Button>
    </div>
  );
};

export default ProductDetailHeading;
