import React, { useEffect, useState } from "react";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { BiCaretDown } from "react-icons/bi";

import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

interface SizeFilterProps {
  isOpen?: boolean;
}

const SizeFilter: React.FC<SizeFilterProps> = ({ isOpen = false }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState<boolean>(isOpen);
  const [selectedSizeList, setSelectedSizeList] = useState<string[]>([]);

  useEffect(() => {
    const hasSizeQuery = searchParams.get("size");
    if (hasSizeQuery) {
      const size = searchParams.get("size");
      setSelectedSizeList(size?.toString().split(".") || []);
    }
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(searchParams.toString());
    if (selectedSizeList.length === 0) {
      query.delete("size");
    } else {
      query.set("size", selectedSizeList.join("."));
    }
    router.push("?" + query.toString(), { scroll: false });
  }, [selectedSizeList]);

  const handleSelectedSize = (selectedSize: string) => {
    console.log("f");
    setSelectedSizeList((prv) => {
      const temp = [...prv];
      const index = temp.findIndex((c) => c === selectedSize);
      if (index !== -1) {
        temp.splice(index, 1);
      } else {
        temp.push(selectedSize);
      }
      console.log(temp);
      return temp;
    });
  };
  return (
    <div>
      <div
        className="flex cursor-pointer items-center justify-between border-b px-4 py-2 text-lg font-medium "
        onClick={() => setOpen((prv) => !prv)}
      >
        <span className="flex items-center gap-2">
          <span>SIZE</span>
          {selectedSizeList.length !== 0 && (
            <span className=" text-base font-normal">
              &#91;
              {selectedSizeList.length}&#93;
            </span>
          )}
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
            <div className="h-4"></div>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <span
                  key={size}
                  className={cn(
                    "flex min-w-12 flex-shrink-0 cursor-pointer items-center justify-center px-3 py-2",
                    selectedSizeList.includes(size)
                      ? "bg-primary text-white"
                      : "ring-1 ring-gray-300",
                  )}
                  onClick={() => handleSelectedSize(size)}
                >
                  {size}
                </span>
              ))}
            </div>
            <div className="h-4"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SizeFilter;
