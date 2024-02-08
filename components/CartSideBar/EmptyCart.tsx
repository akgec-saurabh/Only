import SidebarContext from "@/store/sidebar-context";
import { useContext } from "react";
import Button from "../Button";
import { PiCaretRight } from "react-icons/pi";
import Image from "next/image";
import cart from "@/public/cart.svg";

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
        {/* //Todo animating this svg */}
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
export default EmptyCart;
