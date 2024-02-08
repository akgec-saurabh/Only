import React, { useContext } from "react";
import Logo from "./Logo";
import NavIcon from "../svg/NavIcon";
import CartIcon from "../svg/CartIcon";
import Button from "../Button";
import SidebarContext from "@/store/sidebar-context";

const MobileNavbar = () => {
  const { openSidebar } = useContext(SidebarContext);
  const openSidebarCartHandler = () => {
    openSidebar();
  };

  return (
    <div className="flex w-full items-center justify-between px-4 lg:hidden ">
      <Button size="icon" variant="secondary">
        <NavIcon />
      </Button>
      <Logo />
      <Button size="icon" variant="secondary" onClick={openSidebarCartHandler}>
        <CartIcon />
        <span className="absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-gray-600 text-xs font-bold text-white">
          2
        </span>
      </Button>
    </div>
  );
};

export default MobileNavbar;
