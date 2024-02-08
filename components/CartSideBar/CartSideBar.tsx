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
        .then((response) => response.data.cart),
  });

  return (
    <motion.div
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      exit={{ x: 500 }}
      transition={{ type: "tween" }}
      className="fixed right-0 top-0  z-50 box-border h-screen w-[440px] bg-secondary p-5 shadow"
    >
      {cart ? <ItemCart cart={cart} /> : <EmptyCart />}
    </motion.div>
  );
};

export default CartSideBar;
