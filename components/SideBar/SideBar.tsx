import React, { useContext } from "react";
import cart from "@/public/cart.svg";
import Image from "next/image";
import Button from "../Button";
import { PiCaretRight } from "react-icons/pi";
import SidebarContext from "@/store/sidebar-context";
import ProductQuantity from "@/components/ProductQuantity";
import { IoClose } from "react-icons/io5";
import Border from "@/components/Border";
import { motion } from "framer-motion";
import { demoProducts } from "@/demoProduct";

const EmptyCart = () => {
  const sidebarCtx = useContext(SidebarContext);
  const closeSidebarCartHandler = () => {
    sidebarCtx.closeSidebar();
  };
  return (
    <>
      <div className="text-center text-3xl font-medium ">My Cart</div>
      <Button
        onClick={closeSidebarCartHandler}
        size="icon"
        variant="secondary"
        className="absolute left-0 top-5 -translate-x-2/4 rounded-full border shadow-sm hover:border-none hover:bg-primary hover:text-secondary"
      >
        <PiCaretRight size={18} />
      </Button>
      <div className="mt-[50%] space-y-12">
        <Image
          src={cart}
          alt="cart image"
          width={200}
          height={200}
          className="mx-auto opacity-30"
        />
        <div className="text-center font-medium">No Product in the cart.</div>
        <Button className="w-full" size="lg">
          Return to shop
        </Button>
      </div>
    </>
  );
};

const ItemCart = () => {
  const products = demoProducts;
  const sidebarCtx = useContext(SidebarContext);
  const closeSidebarCartHandler = () => {
    sidebarCtx.closeSidebar();
  };
  return (
    <div className="relative flex h-full flex-col gap-2">
      <div className="relative">
        <h3 className="p-5 text-base font-medium uppercase">Shopping Bag</h3>
        <Button
          onClick={closeSidebarCartHandler}
          size="icon"
          variant="secondary"
          className="absolute -left-5 top-5 -translate-x-2/4 rounded-full border shadow-sm hover:border-none hover:bg-primary hover:text-secondary"
        >
          <PiCaretRight size={18} />
        </Button>
      </div>
      <div className="myscrollbar relative h-full overflow-y-scroll px-5 py-2">
        {products.map((product) => (
          <>
            <Item
              name={product.name}
              price={product.price}
              size={product.additionalInformation.sizes[0]}
              color={product.additionalInformation.colors[0].name}
              quantity={Math.floor(Math.random() * 6) + 1}
            />
            <Border />
          </>
        ))}
      </div>
      <div className="p-5">
        <Border />
        <div className="space-y-4">
          <div className="flex justify-between p-5 text-sm font-medium">
            <span>SUBTOTAL:</span>
            <span>&#8377;45899.00</span>
          </div>
          <Button className="w-full " size="sm" variant="outline">
            View Cart
          </Button>
          <Button size="sm" className="w-full">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

interface ItemProps {
  name: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
}

const Item: React.FC<ItemProps> = ({ name, color, size, quantity, price }) => {
  return (
    <div className="my-4 flex gap-5">
      <Image src="/image.jpg" alt="product" width={120} height={120} />
      <div className="w-full space-y-1">
        <div>{name}</div>
        <div className="text-sm text-gray-500">
          <span>Color: </span>
          <span>{color}</span>
        </div>
        <div className="text-sm text-gray-500">
          <span>Size: </span>
          <span>{size}</span>
        </div>
        <ProductQuantity size="sm" productQuantity={quantity} />
      </div>
      <div className="flex flex-col items-end justify-between">
        <span className="mt-1 cursor-pointer text-gray-500">
          <Button size="icon" variant="secondary">
            <IoClose size={18} />
          </Button>
        </span>
        <div className="mb-4 text-lg">&#8377;{price}</div>
      </div>
    </div>
  );
};

const SideBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 500 }}
      transition={{ type: "tween" }}
      className="fixed right-0 top-0  z-50 box-border h-screen w-[440px] bg-secondary p-5 shadow"
    >
      {/* <EmptyCart /> */}
      <ItemCart />
    </motion.div>
  );
};

export default SideBar;
