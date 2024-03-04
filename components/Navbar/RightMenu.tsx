import AuthContext from "@/store/auth-context";
import SidebarContext from "@/store/sidebar-context";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import Button from "../Button";
import SearchIcon from "../svg/SearchIcon";
import UserIcon from "../svg/UserIcon";
import HeartIcon from "../svg/HeartIcon";
import CartIcon from "../svg/CartIcon";
import CartContext from "@/store/cart-context";
import { cn } from "@/lib/utils";

const RightMenu = () => {
  const router = useRouter();
  const { user, openAuth } = useContext(AuthContext);
  const { openSidebar } = useContext(SidebarContext);

  const { cart } = useContext(CartContext);

  const openSidebarCartHandler = () => {
    openSidebar();
  };

  const openAuthHandler = () => {
    if (!user.token) {
      openAuth();
    } else {
      router.push("/dashboard");
    }
  };
  return (
    <ul className="flex items-center justify-end gap-4 lg:gap-1 xl:gap-2 2xl:gap-4 ">
      <li>
        <Button size="icon" variant="secondary">
          <SearchIcon />
        </Button>
      </li>
      <li>
        <Button size="icon" variant="secondary" onClick={openAuthHandler}>
          {/* <PiUser size={24} /> */}
          <UserIcon />
        </Button>
      </li>
      <li>
        <Button size="icon" variant="secondary">
          {/* <PiHeartStraight size={24} /> */}
          <HeartIcon />
        </Button>
      </li>
      <li className="relative">
        <Button
          size="icon"
          variant="secondary"
          onClick={openSidebarCartHandler}
        >
          {/* <PiBag size={24} /> */}
          <CartIcon />
          <span
            className={cn(
              "absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full text-xs font-bold text-white",
              cart?.length === 0 ? "" : "bg-orange-600",
            )}
          >
            {cart?.length === 0 ? "" : cart?.length}
          </span>
        </Button>
      </li>
    </ul>
  );
};
export default RightMenu;
