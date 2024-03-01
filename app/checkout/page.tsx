"use client";
import BillingForm from "@/components/BillingForm";
import CartTotal from "@/components/CartTotal";
import Payment from "@/components/Payment";
import SectionHeading from "@/components/Section/SectionHeading";
import CartContext from "@/store/cart-context";
import React, { useContext } from "react";

const page = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="mx-auto max-w-xl p-4 md:max-w-2xl lg:max-w-screen-lg xl:max-w-screen-2xl xl:p-10">
      <h2 className="mb-12 text-[35px] font-bold uppercase">
        SHIPPING AND CHECKOUT
      </h2>
      <SectionHeading width="w-2/3" />
      {/* <div className="flex justify-between gap-16"> */}
      <BillingForm />
      {/* <div className="flex-[2] space-y-8">
          <CartTotal cart={cart} />
          <Payment /> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default page;
