"use client";
import React, { useEffect } from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar/Navbar";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import clamp from "@/helpers/clamp";
import MobileNavbar from "./Navbar/MobileNavbar";

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

  return (
    <>
      <TopHeader />
      <motion.div
        // initial={{ top: 0 }}
        style={{
          height,
          top,
        }}
        className="fixed z-30 flex w-full items-center bg-secondary shadow-md transition-height duration-150"
      >
        <Navbar />
        <MobileNavbar />
      </motion.div>
    </>
  );
};

export default Header;
