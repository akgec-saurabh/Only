"use client";
import React, { useState } from "react";
import Button from "./Button";
import { MdArrowDropDown } from "react-icons/md";
import MobileFilterNav from "./Filter/MobileFilterNav";

const ProductGridNav = () => {
  const [itemPerPage, setItemPerPage] = useState(3);
  return (
    <div className="flex justify-between px-4 py-1">
      <div>
        <Button variant="link">HOME</Button>
        <span> / </span>
        <Button variant="link">THE SHOP</Button>
      </div>

      <div className="flex items-center justify-center lg:hidden">
        <MobileFilterNav />
      </div>
    </div>
  );
};

export default ProductGridNav;
