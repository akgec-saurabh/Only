import React, { useEffect, useState } from "react";

import { AnimatePresence, easeInOut } from "framer-motion";
import { motion } from "framer-motion";
import { BiCaretDown } from "react-icons/bi";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const colorCodes = [
  { name: "Red", code: "#FF0000" },
  { name: "Green", code: "#00FF00" },
  { name: "Blue", code: "#0000FF" },
  { name: "Yellow", code: "#FFFF00" },
  { name: "Magenta", code: "#FF00FF" },
  { name: "Cyan", code: "#00FFFF" },
  { name: "Purple", code: "#800080" },
  { name: "Orange", code: "#FFA500" },
  { name: "Black", code: "#000000" },
  { name: "White", code: "#FFFFFF" },
  { name: "Pink", code: "#FFC0CB" }, // Pink
  { name: "Brown", code: "#A52A2A" }, // Brown
  { name: "Lime", code: "#00FF00" }, // Lime
  { name: "Teal", code: "#008080" }, // Teal
  { name: "Silver", code: "#C0C0C0" }, // Silver
  { name: "Gold", code: "#FFD700" }, // Gold
  { name: "Gray", code: "#808080" }, // Gray
  { name: "Sky Blue", code: "#87CEEB" }, // Sky Blue
  { name: "Turquoise", code: "#40E0D0" }, // Turquoise
  { name: "Maroon", code: "#800000" }, // Maroon
  { name: "Olive", code: "#808000" }, // Olive
];

interface ColorFilterProps {
  isOpen?: boolean;
}

const ColorFilter: React.FC<ColorFilterProps> = ({ isOpen = false }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(isOpen);
  const [selectedColorList, setSelectedColorList] = useState<string[]>([]);

  const handleSelectedColor = (selectedColor: string) => {
    setSelectedColorList((prv) => {
      const temp = [...prv];
      const index = temp.findIndex((c) => c === selectedColor);
      if (index !== -1) {
        temp.splice(index, 1);
      } else {
        temp.push(selectedColor);
      }
      console.log(temp);
      return temp;
    });
  };

  useEffect(() => {
    const hasColorQuery = searchParams.has("color");

    if (hasColorQuery) {
      const color = searchParams.get("color");
      setSelectedColorList(color?.toString().split("_") || []);
    }
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(searchParams.toString());
    if (selectedColorList.length === 0) {
      query.delete("color");
    } else {
      query.set("color", selectedColorList.join("_"));
    }
    router.push("?" + query.toString());
  }, [selectedColorList]);

  return (
    <div className="bg-white">
      <div
        className="flex cursor-pointer items-center justify-between  border-b px-4 py-2 text-lg font-medium"
        onClick={() => setOpen((prv) => !prv)}
      >
        <span className="flex items-center gap-2">
          <span>COLOR</span>
          {selectedColorList.length !== 0 && (
            <span className=" text-base font-normal">
              &#91;
              {selectedColorList.length}&#93;
            </span>
          )}
        </span>
        <BiCaretDown />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="overflow-hidden px-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ ease: easeInOut, type: "tween" }}
          >
            <div className="h-4"></div>
            <div className="flex flex-wrap gap-2">
              {colorCodes.map((color) => (
                <span
                  key={color.name}
                  className={cn(
                    "flex h-6  w-6 cursor-pointer items-center justify-center rounded-full shadow ",
                    selectedColorList.includes(color.name)
                      ? "border border-primary"
                      : "border",
                  )}
                  onClick={() => handleSelectedColor(color.name)}
                >
                  <span
                    className=" m-1 inline-block h-4 w-4 flex-shrink-0 rounded-full "
                    style={{ backgroundColor: color.code }}
                  ></span>
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

export default ColorFilter;
