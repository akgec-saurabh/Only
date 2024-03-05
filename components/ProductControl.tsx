"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useContext, useState } from "react";
import Button from "./Button";
import ProductQuantity from "./ProductView/ProductQuantity";
import { PiHeartStraight, PiShareNetwork } from "react-icons/pi";
import { ProductControlsProps } from "@/types/components/ProductControlsTypes";
import CartContext from "@/store/cart-context";
import { CartItem, ColorProps, SizeProps } from "@/types/product";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import AuthContext from "@/store/auth-context";
import ActiveColorContext from "@/store/activeColor-context";

const ProductControlsPreviousVersion: React.FC<ProductControlsProps> = ({
  id,
  name,
  colors,
}) => {
  const { user } = useContext(AuthContext);
  const { mutate } = useMutation({
    mutationFn: (data: CartItem) => {
      return axios.post(
        process.env.NEXT_PUBLIC_BACKEND_API + "/api/cart/add",
        data,
        {
          headers: { Authorization: `Bearer ${user.token}` },
          withCredentials: true,
        },
      );
    },
  });
  const { addItemToCart } = useContext(CartContext);
  const { changeActiveColor } = useContext(ActiveColorContext);
  const [activeColor, setActiveColor] = useState<ColorProps>(colors[0]);
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [activeSize, setActiveSize] = useState<SizeProps>(activeColor.sizes[0]);
  const [activeSizeIndex, setActiveSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const increaseQuantityHandler = () => {
    setQuantity((prv) => prv + 1);
  };
  const decreaseQuantityHandler = () => {
    setQuantity((prv) => (prv === 1 ? 1 : prv - 1));
  };

  // console.log(colors[0].sizes);
  console.log(activeSize);

  const handleColorSelection = (_id: string, colorIndex: number) => {
    const selectedColor = colors.find((color) => color._id === _id);
    if (selectedColor) {
      console.log(colorIndex, "nnh");
      setActiveColor(selectedColor);
      setActiveSize(selectedColor.sizes[0]);
      setActiveColorIndex(colorIndex);
      setActiveSizeIndex(0);
      changeActiveColor(colorIndex);
    }
  };

  const handleSizeSelection = (_id: string, sizeIndex: number) => {
    const selectedSize = activeColor.sizes.find((size) => size._id === _id);
    if (selectedSize) {
      setActiveSize(selectedSize);
      setActiveSizeIndex(sizeIndex);
    }
  };

  /**
   * I am saving index of color and size so that in backend i dont have to find colors and then sizes then price => i can directly get the price,size,color and the specific image if i know the index
   */
  const onAddToCartHandler = () => {
    addItemToCart({
      id,
      name,
      quantity,
      color: activeColor.name,
      price: activeSize.price,
      size: activeSize.size,
      image: activeColor.images[0],
    });
    mutate({
      id,
      name,
      quantity,
      color: activeColor.name,
      colorIndex: activeColorIndex,
      sizeIndex: activeSizeIndex,
      price: activeSize.price,
      size: activeSize.size,
      image: activeColor.images[0],
    });
  };
  return (
    <>
      <div className="mb-4 space-y-4">
        <div className="mb-7 text-2xl font-medium">
          <span> &#8377;{activeSize.price}</span>
        </div>
        <div>Color : {activeColor.name}</div>
        <div className="flex gap-4">
          {colors.map((color, colorIndex) => (
            <div
              key={color._id}
              onClick={() => handleColorSelection(color._id, colorIndex)}
              className="cursor-pointer"
            >
              <Image
                className={cn(
                  "h-20 w-20 border border-black object-cover",
                  activeColor.name === color.name
                    ? "opacity-100"
                    : "opacity-40",
                )}
                alt="Image Color"
                width={80}
                height={80}
                src={color.images[0]}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          {activeColor.sizes.map((size, sizeIndex) => (
            <Button
              key={size._id}
              onClick={() => handleSizeSelection(size._id, sizeIndex)}
              size="sm"
              variant={size.size === activeSize.size ? "default" : "secondary"}
              className="border"
              // todo: instead of adding className border i can modify button
            >
              {size.size}
            </Button>
          ))}
        </div>
      </div>

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
    </>
  );
};

export default ProductControlsPreviousVersion;
