"use client";
import Auth from "@/components/Auth/Auth";
import Backdrop from "@/components/Backdrop";
import CartSideBar from "@/components/CartSideBar/CartSideBar";
import Filter from "@/components/Filter/Filter";
import AuthContext from "@/store/auth-context";
import FilterContext from "@/store/filter-context";
import SidebarContext from "@/store/sidebar-context";
import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import { motion } from "framer-motion";

const Overlays = () => {
  const { isOpen: isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const { isFilterOpen, closeFilter } = useContext(FilterContext);

  const { isAuthOpen, closeAuth } = useContext(AuthContext);
  console.log("filterOpn", isFilterOpen);

  return (
    <>
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <Backdrop onClick={closeFilter} />
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              exit={{ x: 500 }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="myscrollbar fixed right-0  top-0 z-50 box-border h-screen w-full max-w-md overflow-y-auto bg-secondary p-5 shadow"
            >
              <Filter />
            </motion.div>
          </>
        )}
        {isSidebarOpen && (
          <>
            <Backdrop onClick={closeSidebar} />
            <CartSideBar />
          </>
        )}
        {/* {isAuthOpen && (
          <>
            <Backdrop opacity="dark" onClick={closeAuth} />
            <Auth />
          </>
        )} */}
      </AnimatePresence>
    </>
  );
};

export default Overlays;
