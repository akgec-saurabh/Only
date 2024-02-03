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
    <div className="flex gap-4 justify-center ">
      <Button
        onClick={() => setDetailHeading(0)}
        variant="secondary"
        className={cn(
          "text-base",
          detailHeading === 0
            ? "underline-effect"
            : "text-gray-500 hover-effect-full "
        )}
      >
        DESCRIPTION
      </Button>
      <Button
        onClick={() => setDetailHeading(1)}
        variant="secondary"
        className={cn(
          "text-base",
          detailHeading === 1
            ? "underline-effect"
            : "text-gray-500 hover-effect-full"
        )}
      >
        ADDITIONAL INFORMATION
      </Button>
      <Button
        onClick={() => setDetailHeading(2)}
        variant="secondary"
        className={cn(
          "text-base",
          detailHeading === 2
            ? "underline-effect"
            : "text-gray-500 hover-effect-full"
        )}
      >
        REVIEWS
      </Button>
    </div>
  );
};

export default ProductDetailHeading;
