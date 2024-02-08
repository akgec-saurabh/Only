import { ItemCartProps } from "@/types/components/CartSidebar/ItemCartTypes";
import { CartItem } from "@/types/product";
import React from "react";
import Border from "../Border";
import Button from "../Button";

const CartTotal: React.FC<ItemCartProps> = ({ cart }) => {
  const getTotal = () => {
    return cart?.reduce((acc, item) => item.price * item.quantity + acc, 0);
  };
  let shippingCharge = 99;
  if (getTotal() > 5000) {
    shippingCharge = 0;
  }

  let handlingCharge = 10;
  if (getTotal() > 5000) {
    handlingCharge = 0;
  }
  const gstCharge = getTotal() * 0.18;

  const total = getTotal() + shippingCharge + handlingCharge + gstCharge;

  return (
    <div className="flex-1">
      <div className=" mb-6  border border-black p-10 text-sm font-medium">
        <div className="mb-5 text-base">CART TOTALS</div>
        <div className="grid grid-cols-3 py-4">
          <div className="col-span-1">SUBTOTAL</div>
          <div>&#8377; {getTotal()}</div>
        </div>
        <Border />
        <div className="grid grid-cols-3 py-4">
          <div className="col-span-1">SHIPPING</div>

          <div className="col-span-1">
            {shippingCharge === 0
              ? "Free Shipping"
              : `Flat rate : ₹${shippingCharge.toFixed(2)}`}
          </div>
        </div>

        <div className="grid grid-cols-3 py-4">
          <div className="col-span-1">GST &#40;18%&#41;</div>
          <div>&#8377;{gstCharge.toFixed(2)}</div>
        </div>
        <Border />
        <div className="grid grid-cols-3 py-4">
          <div className="col-span-1">TOTAL</div>
          <div>&#8377;{total}</div>
        </div>
      </div>
      <Button size="lg" className="w-full">
        PROCEED TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartTotal;
