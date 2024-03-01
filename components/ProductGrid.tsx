"use client";
import React from "react";
import Product from "./Product";
import { ProductProps } from "@/types/product";
import Pagination from "./Pagination";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const getAllProduct = async (query: {}) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_API}/api/products?${query}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Some Error Occured While Fetching Product");
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

interface ProductGridProps {
  page?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ page = 1 }) => {
  const itemPerPage = 3;
  // const data = await getAllProduct(page, itemPerPage);
  // console.log(data, "total");
  const searchparams = useSearchParams();
  const query = searchparams.toString();
  const { data, isPending } = useQuery({
    queryKey: ["products", query],
    queryFn: () => {
      return getAllProduct(query);
    },
  });

  return (
    <div className="mx-auto  max-w-xl p-4 md:max-w-2xl xl:max-w-screen-2xl">
      {isPending ? (
        <div className="text-center text-xl font-medium">Loading</div>
      ) : (
        !!data && (
          <>
            <div className="grid min-h-[520px]  grid-cols-2 gap-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 ">
              {data?.products?.map((product: ProductProps) => (
                <Product key={product.id} {...product} />
              ))}
            </div>

            <Pagination
              totalItems={data?.total}
              itemPerPage={6}
              noOfPagesToShow={4}
            />
          </>
        )
      )}
    </div>
  );
};

export default ProductGrid;
