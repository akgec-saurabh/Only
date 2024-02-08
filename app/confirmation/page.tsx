import OrderComplete from "@/components/OrderComplete";
import SectionHeading from "@/components/Section/SectionHeading";
import React from "react";

const page = () => {
  return (
    <div className="max-width-container">
      <h2 className="mb-12 text-[35px] font-bold uppercase">ORDER RECEIVED</h2>
      <SectionHeading width="w-3/3" />
      <OrderComplete />
    </div>
  );
};

export default page;
