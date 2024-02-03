"use client";
import React, { useEffect } from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import clamp from "@/helpers/clamp";

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
  let height = useTransform(scrollYBounded, [0, 300], [96, 50]);

  // for tobbar
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
        className="fixed inset-x-0 z-40 bg-secondary shadow transition-height duration-150"
      >
        <Navbar />
      </motion.div>
    </>
  );
};

export default Header;
