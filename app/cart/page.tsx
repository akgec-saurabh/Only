import React from "react";

import CartPage from "@/components/CartPage/CartPage";
import SectionHeading from "@/components/Section/SectionHeading";
import { getSessionStatus } from "@/utils/session";
import { redirect } from "next/navigation";

const page = () => {
  const session = getSessionStatus();
  if (!session) {
    redirect("/");
  }
  return (
    <div className="mx-auto max-w-xl p-4 md:max-w-2xl lg:max-w-screen-lg xl:max-w-screen-2xl xl:p-10">
      <h2 className="mb-12 text-[35px] font-bold uppercase">CART</h2>
      <SectionHeading width="w-1/3" />
      <CartPage />
    </div>
  );
};

export default page;
