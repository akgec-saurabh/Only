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
    <div className="bg-primary">
      <div className="grid grid-cols-3 text-white px-16 h-9 text-sm max-width-container items-center">
        <ul className="flex justify-self-start gap-2">
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
        <div className="uppercase justify-self-center ">
          <p>Free Shipping Worldwide</p>
        </div>
        <ul className="flex justify-self-end items-center gap-1">
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
