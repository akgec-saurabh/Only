import React from "react";

import { easeOut, motion } from "framer-motion";

const CheckIcon = () => {
  return (
    <svg viewBox="0 0 24 24" fill="#fff">
      <motion.path
        animate={{ pathLength: 0 }}
        d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"
      />
    </svg>
  );
};

export default CheckIcon;
