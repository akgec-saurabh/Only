import React from "react";
import { motion } from "framer-motion";
interface BackdropProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween" }}
      onClick={onClick}
      className="fixed inset-0 z-20 bg-black/30 "
    ></motion.div>
  );
};

export default Backdrop;
