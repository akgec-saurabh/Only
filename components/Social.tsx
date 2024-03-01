import React from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaXTwitter,
} from "react-icons/fa6";

const Social = ({ className }: { className: string }) => {
  return (
    <ul className={cn("flex items-center gap-4", className)}>
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
  );
};

export default Social;
