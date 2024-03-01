"use client";

import React, { useEffect, useState } from "react";

import { AnimatePresence, easeInOut, easeOut, motion } from "framer-motion";
import { BiCaretDown, BiCheck } from "react-icons/bi";

import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import CheckIcon from "../svg/CheckIcon";

// Categories of Clothing
const clothingCategories = [
  "T-shirts",
  "Jeans",
  "Dresses",
  "Sweaters",
  "Jackets",
  "Skirts",
  "Shorts",
  "Blouses",
  "Suits",
  "Activewear",
];

interface CategoryFilterProps {
  isOpen?: boolean;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ isOpen = false }) => {
  const [open, setOpen] = useState(isOpen);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategoryList, setSelectedCategoryList] = useState<string[]>(
    [],
  );

  const handleSelectedCategory = (selectedCategory: string) => {
    let temp = [];
    setSelectedCategoryList((prv) => {
      temp = [...prv];
      const index = temp.findIndex((c) => c === selectedCategory);
      if (index !== -1) {
        temp.splice(index, 1);
      } else {
        temp.push(selectedCategory);
      }
      console.log(temp);
      return temp;
    });
  };

  useEffect(() => {
    const hasCategoryQuery = searchParams.has("category");

    if (hasCategoryQuery) {
      const category = searchParams.get("category");
      setSelectedCategoryList(category?.toString().split("_") || []);
    }
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(searchParams.toString());
    if (selectedCategoryList.length === 0) {
      query.delete("category");
    } else {
      query.set("category", selectedCategoryList.join("_"));
    }
    router.push("?" + query.toString(), { scroll: false });
  }, [selectedCategoryList]);

  return (
    <div className="w-full">
      <div
        className="flex cursor-pointer items-center justify-between border-b px-4 py-2 text-lg font-medium"
        onClick={() => setOpen((prv) => !prv)}
      >
        <span className="flex items-center gap-2">
          <span>PRODUCT CATEGORIES</span>
          {selectedCategoryList.length !== 0 && (
            <span className=" text-base font-normal">
              &#91;
              {selectedCategoryList.length}
              &#93;
            </span>
          )}
        </span>
        <BiCaretDown />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className=" overflow-hidden px-4 text-sm"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              ease: [0.32, 0.72, 0, 1],
              type: "tween",
              duration: 0.7,
            }}
          >
            <div className="h-4"></div>
            <div className="space-y-1">
              {clothingCategories.map((category) => (
                <div
                  key={category}
                  className="group flex w-max cursor-pointer items-center justify-between gap-2 px-2"
                  onClick={() => handleSelectedCategory(category)}
                >
                  <div
                    className={cn(
                      "flex size-4 items-center justify-between rounded-full ",
                      selectedCategoryList.includes(category)
                        ? "bg-primary"
                        : "border border-primary",
                    )}
                  >
                    {selectedCategoryList.includes(category) && <CheckIcon />}
                  </div>
                  <span className="">{category}</span>
                </div>
              ))}
            </div>
            <div className="h-4"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryFilter;
