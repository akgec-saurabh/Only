import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
interface BackdropProps {
  opacity?: "normal" | "dark";
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Backdrop: React.FC<BackdropProps> = ({ onClick, opacity = "normal" }) => {
  const opacityType = {
    normal: "bg-black/30",
    dark: "bg-black/50",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween" }}
      onClick={onClick}
      className={cn("fixed inset-0 z-40", opacityType[opacity])}
    ></motion.div>
  );
};

export default Backdrop;
