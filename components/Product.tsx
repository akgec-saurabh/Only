import React from "react";
import Button from "./Button";
import Image from "next/image";
import { PiHeartStraight } from "react-icons/pi";
import Link from "next/link";
import { generateSlug } from "@/lib/utils";

interface ProductProps {
  name: string;
  image: string;
  price: number;
  mainCategory: string;
  id: string;
}

const Product: React.FC<ProductProps> = ({
  image,
  name,
  price,
  id,
  mainCategory,
}) => {
  return (
    <div className="flex h-96 min-w-80 flex-col">
      <div className="relative flex flex-1 flex-shrink-0 flex-col p-4">
        <Image src={image} alt={name} fill className="object-cover" />
        <Button className="mt-auto" variant="secondary">
          ADD TO CART
        </Button>
      </div>
      <div className="mt-auto p-4">
        <div className="flex items-center justify-between text-sm ">
          <span className="text-gray-500">{mainCategory}</span>
          <PiHeartStraight size={20} />
        </div>
        <Link href={`/${generateSlug(name)}/${id}`}>{name}</Link>
        <div>&#8377; {price}</div>
      </div>
    </div>
  );
};

export default Product;
