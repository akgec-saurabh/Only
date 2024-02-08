import Image from "next/image";
import React, { useState } from "react";
import Button from "@/components/Button";
import ProductQuantity from "@/components/ProductView/ProductQuantity";
import { PiHeartStraight, PiShareNetwork } from "react-icons/pi";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductNavbar from "./ProductNavbar";
import ImageView from "../ImageView";
import { ProductProps } from "@/types/product";
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
            productName={product?.name}
            shortDescription={product?.description.short}
            colors={product?.additionalInformation.colors}
            sku={product?.sku}
            categories={product.categories.join(", ")}
            tags={product.tags.join(", ")}
          />

          {/* Product Details */}
          {/* <ProductDetail
            description={{
              ...product?.description,
              productInfo: product?.productInfo,
            }}
            additionalInformation={{
              ...product?.additionalInformation,
              sizes: product?.sizes,
            }}
            // reviews={product?.reviews}
          /> */}
        </div>
      )}
    </>
  );
};

export default ProductView;
