import React from "react";
import ProductQuantity from "./ProductQuantity";
import Button from "../Button";
import { PiHeartStraight, PiShareNetwork } from "react-icons/pi";

interface ProductInteractionProps {
  quantity: number;
  increaseQuantityHandler: () => void;
  decreaseQuantityHandler: () => void;
  onAddToCartHandler: () => void;
}

const ProductInteraction: React.FC<ProductInteractionProps> = ({
  quantity,
  increaseQuantityHandler,
  decreaseQuantityHandler,
  onAddToCartHandler,
}) => {
  return (
    <div>
      <div className="mb-8 flex gap-4">
        <ProductQuantity
          quantity={quantity}
          onIncreaseQuantity={increaseQuantityHandler}
          onDecreaseQuantity={decreaseQuantityHandler}
          size="md"
          className="border"
        />
        <Button onClick={onAddToCartHandler} size="lg">
          ADD TO CART
        </Button>
      </div>
      <div className="mb-8 flex items-center gap-2">
        <Button variant="secondary" className="px-0 pr-4">
          <PiHeartStraight size={20} />
          <span className="ml-2">add to wishlist</span>
        </Button>
        <Button variant="secondary">
          <PiShareNetwork size={20} />
          <span className="ml-2">Share</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductInteraction;
