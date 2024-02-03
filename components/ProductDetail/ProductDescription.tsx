import { descriptionProps } from "@/types/product";
import React from "react";

const ProductDescription: React.FC<descriptionProps> = ({
  short,
  long,
  heading,

  productInfo,
}) => {
  return (
    <div className="py-12">
      <div className="font-medium capitalize mb-6">{heading}</div>
      <div className="mb-6 text-sm leading-7">{long}</div>
      <div className="font-medium capitalize mb-4">Why choose product?</div>
      <ul className="list-disc pl-5 mb-6 text-sm leading-7">
        {productInfo.features?.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="font-medium capitalize mb-4">Sample Number List</div>
      <ol className="list-decimal pl-5 mb-6 text-sm leading-7">
        {productInfo.sampleNumberList?.map((sample) => (
          <li key={sample}>{sample}</li>
        ))}
      </ol>
      <div className="font-medium capitalize mb-4">Lining</div>
      <p className="mb-6 text-sm leading-7">{productInfo.lining}</p>
    </div>
  );
};

export default ProductDescription;
