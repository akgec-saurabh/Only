"use client";
import Auth from "@/components/Auth/Auth";
import Backdrop from "@/components/Backdrop";
import CartSideBar from "@/components/CartSideBar/CartSideBar";
import AuthContext from "@/store/auth-context";
import SidebarContext from "@/store/sidebar-context";
import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";

const Overlays = () => {
  const sidebarCtx = useContext(SidebarContext);
  const isSidebarOpen = sidebarCtx.isOpen;
  const { isAuthOpen, closeAuth } = useContext(AuthContext);

  const closeSidebarCartHandler = () => {
    sidebarCtx.closeSidebar();
  };
  return (
    <>
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <Backdrop onClick={closeSidebarCartHandler} />
            <CartSideBar />
          </>
        )}
        {isAuthOpen && (
          <>
            <Backdrop opacity="dark" onClick={closeAuth} />
            <Auth />
          </>
        )}
      </AnimatePresence>
    </>
    // </div>
  );
};

export default Overlays;
