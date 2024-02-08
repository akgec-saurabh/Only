"use client";
import React, { useState } from "react";
import ImageView from "../ImageView";
import ProductNavbar from "./ProductNavbar";
import ProductSelector from "./ProductSelector";
import { ColorProps } from "@/types/product";
import ProductInteraction from "./ProductInteraction";

interface ProductControlsProps {
  productName: string;
  shortDescription: string;
  colors: ColorProps[];
  sku: string;
  categories: string;
  tags: string;
}

const ProductControls: React.FC<ProductControlsProps> = ({
  productName,
  shortDescription,
  colors,
  sku,
  categories,
  tags,
}) => {
  const [quantity, setQuantity] = useState(1);
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
    // addItemToCart({
    //   id,
    //   name,
    //   quantity,
    //   color: activeColor.name,
    //   price: activeSize.price,
    //   size: activeSize.size,
    //   image: activeColor.images[0],
    // });
    // mutate({
    //   id,
    //   name,
    //   quantity,
    //   color: activeColor.name,
    //   colorIndex: activeColorIndex,
    //   sizeIndex: activeSizeIndex,
    //   price: activeSize.price,
    //   size: activeSize.size,
    //   image: activeColor.images[0],
    // });
  };

  return (
    <div className="gap-14">
      <ImageView
        colors={colors}
        handleActiveColorIndexChange={handleActiveColorIndexChange}
        activeColorIndex={activeColorIndex}
      />
      <div className=" basis-5/12">
        <ProductNavbar />
        <h1 className="mb-2 text-[26px] font-medium">{productName} </h1>
        <p className="mb-4 text-sm leading-7">{shortDescription}</p>

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
