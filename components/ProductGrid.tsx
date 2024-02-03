import React from "react";
import Product from "./Product";

const getAllProduct = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_API}/api/admin/products`;
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
  console.log(data);
  return (
    <div className="max-width-container my-10 grid grid-cols-4 gap-5">
      {data.products?.map((product) => (
        <Product
          image={"/image.jpg"}
          name={product.name}
          price={product.price}
          id={product.id}
          mainCategory={product.mainCategory}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
