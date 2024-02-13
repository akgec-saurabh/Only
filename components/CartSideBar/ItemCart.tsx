import SidebarContext from "@/store/sidebar-context";
import { CartItem } from "@/types/product";
import { useContext } from "react";
import Button from "../Button";
import { PiCaretRight } from "react-icons/pi";
import { ItemCartProps } from "@/types/components/CartSidebar/ItemCartTypes";
import Border from "../Border";
import { useRouter } from "next/navigation";
import { ShoppingCartItem } from "./ShoppingCartItem";

const ItemCart: React.FC<ItemCartProps> = ({ cart }) => {
  const sidebarCtx = useContext(SidebarContext);
  const closeSidebarCartHandler = () => {
    sidebarCtx.closeSidebar();
  };

  const router = useRouter();

  const goToCartPageHandler = () => {
    router.push("/cart");
    sidebarCtx.closeSidebar();
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="relative flex h-full flex-col gap-2">
      <div className="relative">
        <h3 className="p-5 text-base font-medium uppercase">Shopping Bag</h3>
        <Button
          onClick={closeSidebarCartHandler}
          size="icon"
          variant="secondary"
          className=" absolute left-44 top-[12px] -translate-x-2/4 rounded-full border shadow-sm hover:border-none hover:bg-primary hover:text-secondary sm:-left-5 sm:h-10 sm:w-10"
        >
          <PiCaretRight size={22} />
        </Button>
      </div>
      <div className="myscrollbar relative h-full overflow-y-scroll px-5 py-2">
        {cart.map((item, index) => (
          <div key={item.id + item.color + item.size}>
            <ShoppingCartItem {...item} />
            {cart.length !== index + 1 && <Border />}
          </div>
        ))}
      </div>
      <div className="p-5">
        <Border />
        <div className="space-y-4">
          <div className="flex justify-between p-5 text-sm font-medium">
            <span>SUBTOTAL:</span>
            <span>&#8377; {getTotal().toFixed(2)}</span>
          </div>
          <Button
            onClick={goToCartPageHandler}
            className="w-full "
            size="sm"
            variant="outline"
          >
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
export default ItemCart;
