import React, { useContext } from "react";
import { motion } from "framer-motion";
import CartContext from "@/store/cart-context";
import ItemCart from "./ItemCart";
import EmptyCart from "./EmptyCart";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AuthContext from "@/store/auth-context";

const CartSideBar = () => {
  // const { cart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const { cart: offlineCart } = useContext(CartContext);
  const {
    data: cart,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: () =>
      axios
        .get(process.env.NEXT_PUBLIC_BACKEND_API + "/api/cart", {
          headers: { Authorization: `Bearer ${user.token}` },
        })
        .then((response) => {
          console.log(response.data.cart);
          return response.data.cart;
        }),
  });

  console.log(cart);

  return (
    <motion.div
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      exit={{ x: 500 }}
      transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
      className="fixed right-0 top-0  z-50 box-border h-screen w-full max-w-md bg-secondary p-5 shadow"
    >
      {!isPending && !!user.token ? (
        cart?.length === 0 ? (
          <EmptyCart />
        ) : (
          <ItemCart cart={cart} />
        )
      ) : offlineCart?.length === 0 ? (
        <EmptyCart />
      ) : (
        <ItemCart cart={offlineCart} />
      )}
    </motion.div>
  );
};

export default CartSideBar;
