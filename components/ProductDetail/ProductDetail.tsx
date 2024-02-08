"use client";
import React, { useState } from "react";
import ProductAdditionalInformation from "./ProductAdditionalInformation";
import ProductDescription from "@/components/ProductDetail/ProductDescription";
import ProductReviews from "@/components/ProductDetail/ProductReviews";
import { productDetailProps } from "@/types/product";
import ProductDetailHeading from "./ProductDetailHeading";

const ProductDetail: React.FC<productDetailProps> = ({
  description,
  additionalInformation,
  reviews,
}) => {
  const [detailHeading, setDetailHeading] = useState(0);
  console.log(
    "------------------ADDITONAL----------------",
    additionalInformation,
  );

  return (
    <div className="mx-auto my-24 max-w-5xl">
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
