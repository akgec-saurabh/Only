import React from "react";
import Product from "./Product";
import { ProductProps } from "@/types/product";

const getAllProduct = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_API}/api/products`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Some Error Occured While Fetching Product");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const ProductGrid = async () => {
  const data = await getAllProduct();
  return (
    <div className="my-10 grid grid-cols-1 gap-2 px-4 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
      {data.products?.map((product: ProductProps) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
