"use client";
import { CartItem } from "@/types/product";
import {
  CartContextProviderProps,
  CartContextValueProps,
} from "@/types/store/cart-contextTypes";
import { createContext, useEffect, useState } from "react";

const CartContext = createContext<CartContextValueProps>({
  cart: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  increaseItemQuantity: () => {},
  decreaseItemQuantity: () => {},
});

export const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  useEffect(() => {
    const cartString = localStorage.getItem("cartData");
    if (cartString !== null) {
      const carData = JSON.parse(cartString);
      setCart(carData);
    }
  }, []);

  const addItemToCartHandler = (item: CartItem) => {
    const index = cart.findIndex(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.color === item.color &&
        cartItem.size === item.size,
    );
    if (index === -1) {
      setCart((prv) => {
        localStorage.setItem("cartData", JSON.stringify([...prv, item]));

        return [...prv, item];
      });
    } else {
      //Check for diff color or diff size
      setCart((prv) => {
        const tempCart = [...prv];
        if (
          tempCart[index].color === item.color &&
          tempCart[index].size === item.size
        ) {
          const tempItem = { ...prv[index] };
          tempItem.quantity += item.quantity;
          tempCart[index] = tempItem;
          localStorage.setItem("cartData", JSON.stringify(tempCart));
          return tempCart;
        } else {
          localStorage.setItem("cartData", JSON.stringify([...prv, item]));
          setCart((prv) => [...prv, item]);
        }
        return prv;
      });
    }
  };
  const removeItemFromCartHandler = ({
    id,
    size,
    color,
  }: {
    id: string;
    size: string;
    color: string;
  }) => {
    const index = cart.findIndex(
      (cartItem) =>
        cartItem.id === id &&
        cartItem.size === size &&
        cartItem.color === color,
    );
    if (index !== -1) {
      setCart((prv) => {
        const tempCart = [...prv];
        tempCart.splice(index, 1);
        localStorage.setItem("cartData", JSON.stringify(tempCart));
        return tempCart;
      });
    }
  };
  const increaseItemQuantityHandler = ({
    id,
    size,
    color,
  }: {
    id: string;
    size: string;
    color: string;
  }) => {
    const index = cart.findIndex(
      (cartItem) =>
        cartItem.id === id &&
        cartItem.size === size &&
        cartItem.color === color,
    );
    console.log(index);
    if (index !== -1) {
      setCart((prv) => {
        const tempCart = [...prv];
        const tempItem = { ...tempCart[index] };
        tempItem.quantity += 1;
        tempCart[index] = tempItem;
        localStorage.setItem("cartData", JSON.stringify(tempCart));
        return tempCart;
      });
    }
  };
  const decreaseItemQuantityHandler = ({
    id,
    size,
    color,
  }: {
    id: string;
    size: string;
    color: string;
  }) => {
    const index = cart.findIndex(
      (cartItem) =>
        cartItem.id === id &&
        cartItem.size === size &&
        cartItem.color === color,
    );
    if (index !== -1) {
      setCart((prv) => {
        const tempCart = [...prv];
        const tempItem = { ...tempCart[index] };
        if (tempItem.quantity > 1) {
          tempItem.quantity -= 1;
        }
        tempCart[index] = tempItem;
        localStorage.setItem("cartData", JSON.stringify(tempCart));
        return tempCart;
      });
    }
  };

  const contextValue: CartContextValueProps = {
    cart,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
    increaseItemQuantity: increaseItemQuantityHandler,
    decreaseItemQuantity: decreaseItemQuantityHandler,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
