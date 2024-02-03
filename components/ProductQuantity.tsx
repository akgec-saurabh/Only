"use client";
import React, { useState } from "react";
import Button from "@/components/Button";
import { BiMinus, BiPlus } from "react-icons/bi";

interface ProductQuantityProps {
  size: "sm" | "md";
  productQuantity?: number;
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({
  size,
  productQuantity = 1,
}) => {
  const quantitySizes = {
    sm: {
      icon: 14,
      text: "text-sm",
    },
    md: {
      icon: 24,
      text: "text-base",
    },
  };

  const [quantity, setQuantity] = useState(productQuantity);
  const increaseQuantityHandler = () => {
    setQuantity((prv) => prv + 1);
  };
  const decreaseQuantityHandler = () => {
    setQuantity((prv) => (prv === 1 ? 1 : prv - 1));
  };
  return (
    <div className="flex">
      <Button size="icon" variant="secondary" onClick={decreaseQuantityHandler}>
        <BiMinus size={quantitySizes[size].icon} />
      </Button>
      <span
        className={` flex w-6 flex-shrink-0 items-center justify-center ${quantitySizes[size].text}`}
      >
        {quantity}
      </span>
      <Button size="icon" variant="secondary" onClick={increaseQuantityHandler}>
        <BiPlus size={quantitySizes[size].icon} />
      </Button>
    </div>
  );
};

export default ProductQuantity;
