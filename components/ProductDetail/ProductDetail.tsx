"use client";
import React, { useState } from "react";
import ProductAdditionalInformation from "./ProductAdditionalInformation";
import ProductDescription from "@/components/ProductDetail/ProductDescription";
import ProductReviews from "@/components/ProductDetail/ProductReviews";
import { ProductDetailProps } from "@/types/product";
import ProductDetailHeading from "./ProductDetailHeading";

const ProductDetail: React.FC<ProductDetailProps> = ({
  description,
  additionalInformation,
  reviews,
}) => {
  const [detailHeading, setDetailHeading] = useState(0);

  return (
    <div className="xl: mx-auto my-24 max-w-xl px-4 md:max-w-2xl lg:max-w-5xl  ">
      <ProductDetailHeading
        detailHeading={detailHeading}
        setDetailHeading={setDetailHeading}
      />
      {detailHeading === 0 && <ProductDescription {...description} />}
      {detailHeading === 1 && (
        <ProductAdditionalInformation {...additionalInformation} />
      )}
      {detailHeading === 2 && <ProductReviews reviews={reviews} />}
    </div>
  );
};

export default ProductDetail;
