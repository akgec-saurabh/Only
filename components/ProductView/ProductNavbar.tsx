import React from "react";
import Button from "@/components/Button";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

const ProductNavbar = () => {
  return (
    <div className="flex items-center justify-between xl:mb-6 xl:pb-2">
      <div>
        <Button variant="link">HOME</Button>
        <span> / </span>
        <Button variant="link">THE SHOP</Button>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button hasIcon variant="link">
          <PiCaretLeft />
          <span className="hover-effect py-2">PREV</span>
        </Button>
        <Button hasIcon variant="link">
          <span className="hover-effect py-2">NEXT</span>
          <PiCaretRight />
        </Button>
      </div>
    </div>
  );
};

export default ProductNavbar;
