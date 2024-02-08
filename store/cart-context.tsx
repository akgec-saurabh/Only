"use client";
import { CartItem } from "@/types/product";
import { createContext, useState } from "react";

interface CartContextValue {
  cart: CartItem[];
  addItemToCart: (params: CartItem) => void;
  removeItemFromCart: (params: {
    id: string;
    size: string;
    color: string;
  }) => void;
  increaseItemQuantity: (params: {
    id: string;
    size: string;
    color: string;
  }) => void;
  decreaseItemQuantity: (params: {
    id: string;
    size: string;
    color: string;
  }) => void;
}

const CartContext = createContext<CartContextValue>({
  cart: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  increaseItemQuantity: () => {},
  decreaseItemQuantity: () => {},
});

interface CartContextProvider {
  children: React.ReactNode;
}

export const CartContextProvider: React.FC<CartContextProvider> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItemToCartHandler = (item: CartItem) => {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index === -1) {
      setCart((prv) => [...prv, item]);
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
          return tempCart;
        } else {
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
        return tempCart;
      });
    }
  };

  const contextValue: CartContextValue = {
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
