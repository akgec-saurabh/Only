"use client";

import React from "react";

import { motion } from "framer-motion";

import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import PriceFilter from "./PriceFilter";

const Filter = () => {
  // const { data, isPending, isError, error } = useQuery({
  //   queryFn: () => {
  //     return axios
  //       .get(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/products/allfilter`)
  //       .then((res) => res.data)
  //       .catch((error) => console.log(error));
  //   },
  //   queryKey: ["products"],
  // });
  // console.log(data);

  return (
    <div className="my-4 hidden w-full max-w-[294px] lg:block">
      <CategoryFilter isOpen={true} />
      <ColorFilter isOpen={true} />
      <SizeFilter isOpen={true} />
      {/* <PriceFilter isOpen={true} /> */}
    </div>
  );
};

export default Filter;
