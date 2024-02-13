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
    <div className="mx-auto my-10 grid max-w-xl grid-cols-2 gap-2 px-4 sm:grid-cols-2 md:max-w-2xl md:gap-4 lg:grid-cols-3 xl:mx-auto xl:max-w-screen-2xl xl:grid-cols-4 xl:p-10 ">
      {data.products?.map((product: ProductProps) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
