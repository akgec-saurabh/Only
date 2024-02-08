import ProductView from "@/components/ProductView/ProductView";
import React from "react";

const page = ({ params }: { params: { pid: string; pname: string } }) => {
  return <ProductView id={params.pid} />;
};

export default page;
