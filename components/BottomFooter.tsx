import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaXTwitter,
} from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import Newsletter from "./Newsletter";

const BottomFooter = () => {
  const year = new Date().getFullYear();
  const footerName = `${year} NovaNest`;
  return (
    <div className="bg-primary text-white  ">
      <Newsletter />
      <div className="grid grid-cols-5 max-w-screen-2xl py-24 mx-auto text-sm">
        <ul className="space-y-3 px-4">
          <li>
            <Logo />
          </li>
          <li>9234 Near Times Square, React Developer,221010 Varanasi India</li>
          <li className="font-medium">sale@novanest.com</li>
          <li className="font-medium">+91 1234567890</li>
          <li>
            <ul className="flex  items-center gap-4">
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
                  <BsYoutube />
                </Link>
              </li>
              <li>
                <Link href="">
                  <FaPinterest />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="space-y-3 ">
          <li className="uppercase font-medium pb-7">
            <Link href="">Company</Link>
          </li>
          <li>
            <Link href="">About Us</Link>
          </li>
          <li>
            <Link href="">Carrers</Link>
          </li>
          <li>
            <Link href="">Affliates</Link>
          </li>
          <li>
            <Link href="">Blog</Link>
          </li>
          <li>
            <Link href="">Contact Us</Link>
          </li>
        </ul>

        <ul className="space-y-3 px-4">
          <li className="uppercase font-medium pb-7">
            <Link href="">Shop</Link>
          </li>
          <li>
            <Link href="">New Arrivals</Link>
          </li>
          <li>
            <Link href="">Accessories</Link>
          </li>
          <li>
            <Link href="">Men</Link>
          </li>
          <li>
            <Link href="">Women</Link>
          </li>
          <li>
            <Link href="">Shop All</Link>
          </li>
        </ul>
        <ul className="space-y-3 px-4">
          <li className="uppercase font-medium pb-7">
            <Link href="">Help</Link>
          </li>
          <li>
            <Link href="">Customer Service</Link>
          </li>
          <li>
            <Link href="">My Account</Link>
          </li>
          <li>
            <Link href="">Find a Store</Link>
          </li>
          <li>
            <Link href="">Legal & Privacy</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
          <li>
            <Link href="">Gift Card</Link>
          </li>
        </ul>
        <ul className="space-y-3 px-4">
          <li className="uppercase font-medium pb-7">Opening Time</li>
          <li>Mon - Fri: 8AM - 9PM</li>
          <li>Sat: 9AM - 8PM</li>
          <li>Sun: Closed</li>
        </ul>
      </div>
      <div className="w-full h-[0.2px] bg-gray-900"></div>
      <div className="py-6 max-w-screen-2xl mx-auto text-center text-sm">
        <p>
          &#169;All rights reserved {footerName} | Where Comfort Meets
          Craftsmanship.
        </p>
      </div>
    </div>
  );
};

export default BottomFooter;
