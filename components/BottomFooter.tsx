import React from "react";
import Logo from "./Navbar/Logo";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaXTwitter,
} from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import Newsletter from "./Newsletter";
import Border from "./Border";

const BottomFooter = () => {
  const year = new Date().getFullYear();
  const footerName = `${year} NovaNest`;
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-xl bg-primary px-4  text-white md:max-w-2xl lg:max-w-screen-lg xl:max-w-screen-2xl xl:p-10">
        <Newsletter />
        <div className="mx-auto  flex max-w-screen-2xl flex-col space-y-8 py-12 text-sm lg:flex-row xl:justify-between">
          <ul className="max-w-xs space-y-3">
            <li>
              <Logo />
            </li>
            <li>
              9234 Near Times Square, React Developer,221010 Varanasi India
            </li>
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
          <div className="flex flex-1">
            <ul className="flex-1 space-y-3 ">
              <li className="pb-2 font-medium uppercase">
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

            <ul className="flex-1 space-y-3 ">
              <li className="pb-2 font-medium uppercase">
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
          </div>
          <div className="flex flex-1 justify-between">
            <ul className="flex-1 space-y-3">
              <li className="pb-2 font-medium uppercase">
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
            <ul className="flex-1 space-y-3 ">
              <li className="pb-2 font-medium uppercase">Opening Time</li>
              <li>Mon - Fri: 8AM - 9PM</li>
              <li>Sat: 9AM - 8PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>
        <Border variant="dark" />
        <div className="mx-auto max-w-screen-2xl py-6 text-center text-sm">
          <p>
            &#169;All rights reserved {footerName} | Where Comfort Meets
            Craftsmanship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
