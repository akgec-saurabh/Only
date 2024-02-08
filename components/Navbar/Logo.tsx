"use client";
import React from "react";

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  const onLogoClickHandler = () => {
    router.push("/");
  };
  return (
    <div
      onClick={onLogoClickHandler}
      className="flex cursor-pointer items-center text-3xl font-bold uppercase"
    >
      N<span className="text-red-600">o</span>
      va
    </div>
  );
};

export default Logo;
