import React, { useContext, useState } from "react";
import Logo from "./Logo";
import NavIcon from "../svg/NavIcon";
import CartIcon from "../svg/CartIcon";
import Button from "../Button";
import SidebarContext from "@/store/sidebar-context";
import CartContext from "@/store/cart-context";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";
import CloseIcon from "../svg/CloseIcon";
import { AnimatePresence } from "framer-motion";

const MobileNavbar = ({ handleMenuOpen, menuOpen }) => {
  const { openSidebar } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);

  const openSidebarCartHandler = () => {
    openSidebar();
  };

  return (
    <>
      <div className="mx-auto flex w-full  max-w-xl items-center justify-between px-4 md:max-w-2xl lg:hidden">
        <Button onClick={handleMenuOpen} size="icon" variant="secondary">
          {menuOpen ? <CloseIcon /> : <NavIcon />}
        </Button>
        <Logo />
        <Button
          size="icon"
          variant="secondary"
          onClick={openSidebarCartHandler}
        >
          <CartIcon />
          <span
            className={cn(
              "absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full text-xs font-bold text-white",
              cart.length === 0 ? "" : "bg-rose-500",
            )}
          >
            {cart.length === 0 ? "" : cart.length}
          </span>
        </Button>
      </div>
    </>
  );
};

export default MobileNavbar;
