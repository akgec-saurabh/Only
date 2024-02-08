"use client";
import CartContext from "@/store/cart-context";
import React, { useContext } from "react";
import ItemCart from "@/components/CartSideBar/ItemCart";
import { ShoppingCartItemWide } from "../CartSideBar/ShoppingCartItem";
import Border from "../Border";
import CartTotal from "./CartTotal";
import AuthContext from "@/store/auth-context";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CartPage = () => {
  // const { cart } = useContext(CartContext);

  const { user } = useContext(AuthContext);

  console.log(user);
  const {
    data: cart,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: () =>
      axios
        .get(process.env.NEXT_PUBLIC_BACKEND_API + "/api/cart", {
          headers: { Authorization: `Bearer ${user?.token}` },
        })
        .then((response) => response.data.cart),
    enabled: !!user.token,
  });

  return (
    <div className="flex gap-16">
      <div className="max-w-5xl flex-[2]">
        <div className="grid grid-cols-10 pb-2 text-sm font-medium">
          <div className="col-span-5">PRODUCT</div>
          <div className="col-span-1">PRICE</div>
          <div className="col-span-2">QUANTITY</div>
          <div className="col-span-2">SUBTOTAL</div>
        </div>
        <Border />
        <div className="">
          {cart?.map((item, index) => (
            <div key={index}>
              <ShoppingCartItemWide {...item} />
              {cart.length === index + 1 ? "" : <Border />}
            </div>
          ))}
        </div>
      </div>
      <CartTotal cart={cart} />
    </div>
  );
};

export default CartPage;
