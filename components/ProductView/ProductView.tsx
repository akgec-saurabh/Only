import Image from "next/image";
import React, { useState } from "react";
import Button from "@/components/Button";
import ProductQuantity from "@/components/ProductView/ProductQuantity";
import { PiHeartStraight, PiShareNetwork } from "react-icons/pi";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductNavbar from "./ProductNavbar";
import ImageView from "../ImageView";
import { ProductProps, reviewsProps } from "@/types/product";
import ProductControls from "./ProductControls";

const getProductById = async (id: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_API}/api/products/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const reviews: reviewsProps[] = [
  {
    author: "John Doe",
    date: "2024-03-01",
    rating: 4,
    content: "Great product! Very satisfied with my purchase.",
  },
  {
    author: "Jane Smith",
    date: "2024-02-28",
    rating: 5,
    content: "Excellent service and fast shipping. Highly recommended.",
  },
  {
    author: "Alex Johnson",
    date: "2024-03-02",
    rating: 3,
    content: "Product quality could be better, but overall okay.",
  },
  {
    author: "Emily Brown",
    date: "2024-03-03",
    rating: 5,
    content: "Absolutely love it! Couldn't be happier with my purchase.",
  },
];

// A Component that receives product and display them
const ProductView = async ({ id }: { id: string }) => {
  const data = await getProductById(id);
  const product: ProductProps = data?.product;

  const categories = product?.categories.join(", ");
  const tags = product?.tags.join(", ");

  return (
    <>
      {data && (
        <div className="mx-auto max-w-screen-2xl xl:p-10 xl:py-2">
          {/* For Product Image Slider and Image */}
          <ProductControls
            productId={product?.id}
            productName={product?.name}
            shortDescription={product?.description.short}
            colors={product?.additionalInformation.colors}
            sku={product?.sku}
            categories={product.categories.join(", ")}
            tags={product.tags.join(", ")}
          />

          {/* Product Details */}
          <ProductDetail
            description={{
              ...product?.description,
              productInfo: product?.productInfo,
            }}
            additionalInformation={{
              ...product?.additionalInformation,
              sizes: product?.sizes,
            }}
            reviews={reviews}
          />
        </div>
      )}
    </>
  );
};

export default ProductView;
