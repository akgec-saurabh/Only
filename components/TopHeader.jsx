import React from "react";

import Link from "next/link";

import Social from "./Social";

const TopHeader = () => {
  return (
    <div className="bg-primary ">
      <div className="grid h-9 items-center px-4  text-sm text-white lg:mx-auto lg:max-w-screen-lg lg:grid-cols-3 xl:max-w-screen-2xl xl:px-10">
        <ul className="hidden gap-4 justify-self-start lg:flex">
          <li className="">
            <Link href="">Shipping</Link>
          </li>
          <li>
            <Link href="">FAQ</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
          <li>
            <Link href="">Track Order</Link>
          </li>
        </ul>
        <div className="justify-self-center uppercase ">
          <p>Free Shipping Worldwide</p>
        </div>
        <Social className="hidden justify-end lg:flex" />
      </div>
    </div>
  );
};

export default TopHeader;
