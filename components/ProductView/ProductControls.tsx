"use client";
import React, { useContext, useState } from "react";
import ImageView from "../ImageView";
import ProductNavbar from "./ProductNavbar";
import ProductSelector from "./ProductSelector";
import { CartItem, ColorProps } from "@/types/product";
import ProductInteraction from "./ProductInteraction";
import ImageDisplay from "../ImageDisplay";
import { color } from "framer-motion";
import CartContext from "@/store/cart-context";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import AuthContext from "@/store/auth-context";

interface ProductControlsProps {
  productId: string;
  productName: string;
  shortDescription: string;
  colors: ColorProps[];
  sku: string;
  categories: string;
  tags: string;
}

const ProductControls: React.FC<ProductControlsProps> = ({
  productId,
  productName,
  shortDescription,
  colors,
  sku,
  categories,
  tags,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const { mutate } = useMutation({
    mutationFn: (data: CartItem) => {
      return axios.post(
        process.env.NEXT_PUBLIC_BACKEND_API + "/api/cart/add",
        data,
        { headers: { Authorization: `Bearer ${user.token}` } },
      );
    },
  });
  const increaseQuantityHandler = () => {
    setQuantity((prv) => prv + 1);
  };
  const decreaseQuantityHandler = () => {
    setQuantity((prv) => (prv === 1 ? 1 : prv - 1));
  };

  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [activeSizeIndex, setActiveSizeIndex] = useState(0);
  const handleActiveColorIndexChange = (colorIndex: number) => {
    setActiveColorIndex(colorIndex);
    setActiveSizeIndex(0);
  };
  const handleActiveSizeIndexChange = (sizeIndex: number) => {
    setActiveSizeIndex(sizeIndex);
  };

  const onAddToCartHandler = () => {
    !!user.token
      ? mutate({
          id: productId,
          name: productName,
          quantity,
          color: colors[activeColorIndex].name,
          colorIndex: activeColorIndex,
          sizeIndex: activeSizeIndex,
          price: colors[activeColorIndex].sizes[activeSizeIndex].price,
          size: colors[activeColorIndex].sizes[activeSizeIndex].size,
          image: colors[activeColorIndex].images[0],
        })
      : addItemToCart({
          id: productId,
          name: productName,
          quantity,
          color: colors[activeColorIndex].name,
          price: colors[activeColorIndex].sizes[activeSizeIndex].price,
          size: colors[activeColorIndex].sizes[activeSizeIndex].size,
          image: colors[activeColorIndex].images[0],
        });
  };

  return (
    <div className="mx-auto max-w-xl p-4 md:max-w-2xl lg:flex lg:max-w-screen-lg lg:justify-between lg:gap-10 xl:max-w-screen-2xl">
      <div className="lg:hidden">
        <ProductNavbar />
        <h1 className="mb-2 text-[26px] font-medium">{productName} </h1>
        <p className="mb-4 hidden text-sm leading-7 sm:block">
          {shortDescription}
        </p>
      </div>

      {/* <ImageView
        colors={colors}
        handleActiveColorIndexChange={handleActiveColorIndexChange}
        activeColorIndex={activeColorIndex}
      /> */}

      <ImageDisplay activeColorIndex={activeColorIndex} colors={colors} />
      <div className="max-w-sm xl:max-w-lg">
        <div className="hidden lg:block">
          <ProductNavbar />
          <h1 className="mb-2 text-[26px] font-medium">{productName} </h1>
          <p className="mb-4 hidden text-sm leading-7 sm:block">
            {shortDescription}
          </p>
        </div>
        <ProductSelector
          handleActiveColorIndexChange={handleActiveColorIndexChange}
          handleActiveSizeIndexChange={handleActiveSizeIndexChange}
          colors={colors}
          activeColorIndex={activeColorIndex}
          activeSizeIndex={activeSizeIndex}
        />
        <ProductInteraction
          quantity={quantity}
          increaseQuantityHandler={increaseQuantityHandler}
          decreaseQuantityHandler={decreaseQuantityHandler}
          onAddToCartHandler={onAddToCartHandler}
        />

        {/* SKU CATEGORIS AND TAGS */}
        {/* //todo: Make this tags and categories clickable to go to filter */}
        <div className="space-y-1 text-sm">
          <div>
            <span className="text-primary/45">SKU : </span> {sku}
          </div>
          <div className="capitalize">
            <span className="text-primary/45">CATEGORIES : </span>
            {categories}
          </div>
          <div className="capitalize">
            <span className="text-primary/45">TAGS : </span>
            {tags}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductControls;
