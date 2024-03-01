import CartContext from "@/store/cart-context";
import { CartItem } from "@/types/product";
import React, { useContext } from "react";
import Border from "./Border";

const CartTotal = ({ cart }: { cart: CartItem[] }) => {
  const subtotal = cart.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.price * currentItem.quantity,
    0,
  );
  const shipping = 99;
  const gst = 0.18 * subtotal;
  const total = subtotal + shipping + gst;

  return (
    <div className="space-y-2 border border-black p-10 text-sm text-gray-500">
      <h3 className="mb-8 text-base font-medium text-primary">YOUR ORDER</h3>
      <div className="mb-1 flex justify-between font-medium text-primary">
        <div>PRODUCT</div>
        <div>SUBTOTAL</div>
      </div>
      <Border />
      <div>
        {cart.map((product) => (
          <div className="flex justify-between">
            <div className="capitalize">
              {product.name.toLowerCase()} <span className="lowercase">x</span>{" "}
              {product.quantity} {product.color}
            </div>
            <div>{(product.price * product.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>
      <Border />
      <table className="my-2 flex justify-between text-primary">
        <thead>
          <tr className="flex flex-col items-start gap-2">
            <th className="font-medium">SUBTOTAL</th>
            <th className="font-medium">SHIPPING</th>
            <th className="font-medium">GST</th>
            <th className="font-medium">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr className="flex flex-col items-end gap-2 font-medium">
            <td>{subtotal.toFixed(2)}</td>
            <td>{shipping.toFixed(2)}</td>
            <td>{gst.toFixed(2)}</td>
            <td>{total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartTotal;
