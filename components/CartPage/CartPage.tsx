"use client";
import CartContext from "@/store/cart-context";
import React, { useContext } from "react";
import ItemCart from "@/components/CartSideBar/ItemCart";
import {
  ShoppingCartItem,
  ShoppingCartItemWide,
} from "../CartSideBar/ShoppingCartItem";
import Border from "../Border";
import CartTotal from "./CartTotal";
import AuthContext from "@/store/auth-context";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CartSideBar from "../CartSideBar/CartSideBar";
import { CartItem } from "@/types/product";

const CartPage = () => {
  const { cart: offlineCart } = useContext(CartContext);

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
    <div className="flex flex-col gap-8 lg:flex-row">
      <div className="hidden max-w-5xl  md:block md:flex-[2]">
        <div className="grid grid-cols-10 pb-2 text-sm font-medium">
          <div className="col-span-5">PRODUCT</div>
          <div className="col-span-1">PRICE</div>
          <div className="col-span-2">QUANTITY</div>
          <div className="col-span-2">SUBTOTAL</div>
        </div>
        <Border />
        <div className="">
          {!!user.token
            ? cart
            : offlineCart.map((item, index) => (
                <div key={index}>
                  <ShoppingCartItemWide {...item} />
                  {!!user.token ? (
                    cart
                  ) : offlineCart.length === index + 1 ? (
                    ""
                  ) : (
                    <Border />
                  )}
                </div>
              ))}
        </div>
      </div>
      <div className="md:hidden">
        {!!user.token
          ? cart
          : offlineCart.map((item: CartItem, i) => (
              <ShoppingCartItem
                id={item.id}
                image={item.image}
                color={item.color}
                price={item.price}
                quantity={item.quantity}
                size={item.size}
                key={item.id + i}
                name={item.name}
              />
            ))}
      </div>
      <CartTotal cart={cart} />
    </div>
  );
};

export default CartPage;
