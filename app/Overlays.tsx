"use client";
import Backdrop from "@/components/Backdrop";
import SideBar from "@/components/SideBar/SideBar";
import SidebarContext from "@/store/sidebar-context";
import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";

const Overlays = () => {
  const sidebarCtx = useContext(SidebarContext);
  const isSidebarOpen = sidebarCtx.isOpen;

  const closeSidebarCartHandler = () => {
    sidebarCtx.closeSidebar();
  };
  return (
    <>
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <Backdrop onClick={closeSidebarCartHandler} />
            <SideBar />
          </>
        )}
      </AnimatePresence>
    </>
    // </div>
  );
};

export default Overlays;
