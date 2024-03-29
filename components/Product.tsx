"use client";
import React, { useContext } from "react";
import Button from "./Button";
import Image from "next/image";
import { PiHeartStraight } from "react-icons/pi";
import Link from "next/link";
import { generateSlug } from "@/lib/utils";
import { CartItem, ProductProps } from "@/types/product";
import CartContext from "@/store/cart-context";

const Product: React.FC<ProductProps> = ({ ...props }) => {
  // const { addItemToCart } = useContext(CartContext);
  // const onAddToCartHandler = (id: string) => {
  //   const item: CartItem = {
  //     id,
  //     price: props.price,
  //     image: props.images[0],
  //     quantity: 1,
  //     name: props.name,
  //     color: props.additionalInformation.colors[0].name,
  //     size: props.sizes[0],
  //   };
  //   addItemToCart(item);
  // };
  return (
    <div className="flex max-h-[520px] w-full flex-col overflow-hidden  rounded shadow">
      <Link
        href={`/product/${generateSlug(props.name)}/${props.id}`}
        className="relative w-full  shadow"
      >
        <Image
          // sizes="25vw"
          src={props.images[0]}
          alt={props.name}
          width={324}
          height={432}
          className="aspect-[3/4] w-full object-cover"
        />
      </Link>
      <div className="mt-auto truncate p-4">
        <div className="flex items-center justify-between text-sm ">
          <span className="text-gray-500">{props.mainCategory}</span>
          <PiHeartStraight size={20} />
        </div>
        <Link
          className="capitalize"
          href={`/product/${generateSlug(props.name)}/${props.id}`}
        >
          {props.name.toLowerCase()}
        </Link>
        <div>&#8377; {props.price}</div>
      </div>
    </div>
  );
};

export default Product;
