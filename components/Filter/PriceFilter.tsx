import React, { useEffect, useState } from "react";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { BiCaretDown } from "react-icons/bi";

import { cn } from "@/lib/utils";
import SliderRange from "./RangeSlider";
import { useRouter, useSearchParams } from "next/navigation";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

interface PriceFilterProps {
  isOpen?: boolean;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ isOpen = false }) => {
  const min = 1000;
  const max = 10000;
  const [open, setOpen] = useState({ isOpen });
  const router = useRouter();
  const searchParams = useSearchParams();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    const hasPriceFilter =
      searchParams.get("minPrice") && searchParams.get("maxPrice");
    if (hasPriceFilter) {
      const min_price = searchParams.get("minPrice");
      const max_price = searchParams.get("maxPrice");

      // setMinPrice(minPrice);
      // setMaxPrice(maxPrice);
    }
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(searchParams.toString());
    query.set("minPrice", minPrice.toString());
    query.set("maxPrice", maxPrice.toString());
    console.log(minPrice, maxPrice);
    router.push("?" + query.toString(), { scroll: false });
  }, [minPrice, maxPrice]);

  const onMinChange = (minPriceChange) => {
    setMinPrice(minPriceChange);
  };
  const onMaxChange = (maxPriceChange) => {
    setMaxPrice(maxPriceChange);
  };

  return (
    <div>
      <div
        className="flex cursor-pointer items-center justify-between border-b px-4 py-2 text-lg font-medium "
        onClick={() => setOpen((prv) => !prv)}
      >
        <span className="flex items-center gap-2">
          <span>PRICE</span>
          {/* {selectedSizeList.length !== 0 && (
            <span className=" text-base font-normal">
              &#91;
              {selectedSizeList.length}&#93;
            </span>
          )} */}
        </span>
        <BiCaretDown />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ ease: easeInOut, type: "tween" }}
            className="px-4"
          >
            <SliderRange
              min={min}
              max={max}
              onMinChange={onMinChange}
              onMaxChange={onMaxChange}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PriceFilter;
