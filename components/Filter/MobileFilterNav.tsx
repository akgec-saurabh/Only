"use client";

import FilterContext from "@/store/filter-context";
import React, { useContext } from "react";
import { IoFilter } from "react-icons/io5";

const MobileFilterNav = () => {
  const { openFilter } = useContext(FilterContext);
  return (
    <div
      className=" flex w-max items-center gap-2 bg-red-500 px-2 text-base font-medium lg:hidden"
      onClick={openFilter}
    >
      <IoFilter />
      <span>FILTER</span>
    </div>
  );
};

export default MobileFilterNav;
