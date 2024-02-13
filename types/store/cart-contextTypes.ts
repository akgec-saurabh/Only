import { CartItem } from "../product";

export interface CartContextProviderProps {
  children: React.ReactNode;
}

export interface CartContextValueProps {
  cart: CartItem[];
  //   cartTotal: number;
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
