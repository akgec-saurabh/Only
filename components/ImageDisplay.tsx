import { ColorProps } from "@/types/product";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
const ImageDisplay = ({
  colors,
  activeColorIndex,
}: {
  colors: ColorProps[];
  activeColorIndex: number;
}) => {
  const images = colors.map((color) => color.images).flat();
  const [index, setIndex] = useState(0);
  // [[1,2,3],[1,2,3,4,5]]

  useEffect(() => {
    if (activeColorIndex === 0) {
      setIndex(0);
    }
    if (activeColorIndex === 1) {
      setIndex(colors[0].images.length);
    }
    if (activeColorIndex === 2) {
      setIndex(colors[0].images.length + colors[1].images.length);
    }
    if (activeColorIndex === 3) {
      setIndex(
        colors[0].images.length +
          colors[1].images.length +
          colors[2].images.length,
      );
    }
  }, [activeColorIndex]);

  return (
    <div className="w-full space-y-4 lg:max-w-4xl xl:max-w-2xl ">
      <div className="relative  mx-auto w-full overflow-hidden">
        <motion.div
          drag="x"
          dragSnapToOrigin
          animate={{ x: `-${index * 100}%` }}
          transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.7 }}
          className="flex "
        >
          {images.map((image, i) => (
            <img
              key={i}
              className="aspect-[11/12] h-auto shrink-0 object-cover"
              alt="image"
              src={image}
            />
          ))}
        </motion.div>
        <div className="absolute inset-x-0 top-1/2 ">
          {index > 0 && (
            <Button
              onClick={() => {
                setIndex((prv) => prv - 1);
              }}
              variant="secondary"
              size="icon"
            >
              <BiCaretLeft />
            </Button>
          )}
          {index < images.length - 1 && (
            <Button
              className="absolute right-0"
              onClick={() => {
                setIndex((prv) => prv + 1);
              }}
              variant="secondary"
              size="icon"
            >
              <BiCaretRight />
            </Button>
          )}
        </div>
      </div>
      <div className=" flex justify-center overflow-hidden">
        <motion.div
          animate={{ x: `-${(index * 100 * (2 / 4)) / (3 / 4)}%` }}
          className="flex aspect-[3/4] h-24"
        >
          {images.map((image, i) => (
            <button
              key={i}
              className={cn(
                "shrink-0",
                i === index ? "aspect-[3/4]" : "aspect-[2/4]",
              )}
              onClick={() => {
                setIndex(i);
              }}
            >
              <Image
                className="h-full object-cover"
                width={80}
                height={90}
                src={image}
                alt="image"
              />
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ImageDisplay;
