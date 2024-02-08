import React from "react";
import Button from "@/components/Button";
import { BiMinus, BiPlus } from "react-icons/bi";
import {
  ProductQuantityProps,
  QuantitySizesProps,
} from "@/types/components/ProductQuantityTypes";
import { PiMinus, PiPlus } from "react-icons/pi";
import { cn } from "@/lib/utils";

const ProductQuantity: React.FC<ProductQuantityProps> = ({
  size,
  quantity = 1,
  onDecreaseQuantity,
  onIncreaseQuantity,
  className,
}) => {
  const quantitySizes: QuantitySizesProps = {
    sm: {
      icon: 14,
      text: "text-sm",
      buttonSize: "xs",
    },
    md: {
      icon: 16,
      text: "text-base",
      buttonSize: "xs",
    },
  };

  return (
    <div className={cn("flex w-max items-center", className)}>
      <Button
        size={quantitySizes[size].buttonSize}
        variant="secondary"
        onClick={onDecreaseQuantity}
      >
        <PiMinus size={quantitySizes[size].icon} />
      </Button>
      <span
        className={cn(
          "flex flex-shrink-0 items-center justify-center",
          quantitySizes[size].text,
          quantitySizes[size].buttonSize === "xs" ? "h-9 w-9" : "h-12 w-12",
        )}
      >
        {quantity}
      </span>
      <Button
        size={quantitySizes[size].buttonSize}
        variant="secondary"
        onClick={onIncreaseQuantity}
      >
        <PiPlus size={quantitySizes[size].icon} />
      </Button>
    </div>
  );
};

export default ProductQuantity;
