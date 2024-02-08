import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaXTwitter,
} from "react-icons/fa6";

const TopHeader = () => {
  return (
    <div className="bg-primary ">
      <div className="grid h-9 items-center text-sm  text-white lg:mx-auto lg:grid-cols-3 lg:max-2xl:px-10 xl:max-w-screen-2xl xl:px-10">
        <ul className="hidden gap-2 justify-self-start lg:flex">
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
        <ul className="hidden items-center gap-1 justify-self-end lg:flex">
          <li>
            <Link href="">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link href="">
              <FaXTwitter />
            </Link>
          </li>
          <li>
            <Link href="">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link href="">
              <FaPinterest />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
