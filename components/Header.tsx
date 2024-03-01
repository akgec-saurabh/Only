"use client";
import React, { useEffect, useState } from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar/Navbar";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import clamp from "@/helpers/clamp";
import MobileNavbar from "./Navbar/MobileNavbar";
import MobileMenu from "./Navbar/MobileMenu";

const useBoundedScroll = (bounds: number) => {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);
  let scroll;

  useMotionValueEvent(scrollY, "change", (latest) => {
    let previous = scrollY.getPrevious() ?? 0;
    let diff = latest - previous;
    let newScrollYBounded = scrollYBounded.get() + diff;
    scrollYBounded.set(clamp(newScrollYBounded, 0, bounds));
  });
  return { scrollYBounded };
  1;
};
3;
const Header = () => {
  let { scrollYBounded } = useBoundedScroll(300);
  let height = useTransform(scrollYBounded, [0, 300], [80, 50]);

  // for topbar
  const { scrollY } = useScroll();
  let top = useTransform(scrollY, [0, 36], [36, 0]);

  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen((prv) => !prv);
  };

  return (
    <>
      <TopHeader />
      <motion.div
        // initial={{ top: 0 }}
        initial={false}
        style={{
          height,
          top,
        }}
        className="fixed z-30 flex w-full items-center bg-secondary shadow transition-height duration-150"
      >
        <Navbar />
        <MobileNavbar menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
      </motion.div>

      <AnimatePresence>{menuOpen && <MobileMenu />}</AnimatePresence>
    </>
  );
};

export default Header;
