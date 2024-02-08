"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import {
  PiArrowLeft,
  PiArrowRight,
  PiArrowsOut,
  PiCaretCircleDoubleDown,
  PiCaretCircleDown,
  PiCaretDown,
  PiCaretLeft,
  PiCaretLeftLight,
  PiCaretLeftThin,
  PiCaretRightLight,
  PiCaretUp,
} from "react-icons/pi";
import Button from "./Button";
import { HiOutlineArrowsPointingOut } from "react-icons/hi2";
import { LiaExpandArrowsAltSolid } from "react-icons/lia";
import { cn } from "@/lib/utils";
import { IoClose } from "react-icons/io5";
import { ImageViewProps } from "@/types/components/ImageViewTypes";
import ActiveColorContext from "@/store/activeColor-context";

// const FullImageView = ({
//   images,
//   setIsImageFullView,
// }: {
//   images: string[];
//   setIsImageFullView: () => void;
// }) => {
//   const [index, setIndex] = useState(0);

//   const onNextHandler = () => {
//     if (index + 1 !== images.length) {
//       setIndex((prv) => prv + 1);
//     }
//   };
//   const onBackHandler = () => {
//     if (index !== 0) {
//       setIndex((prv) => prv - 1);
//     }
//   };

//   return (
//     <>
//       <Image
//         className=" fixed left-1/2 top-1/2 z-50 h-5/6  w-max -translate-x-1/2 -translate-y-1/2 object-contain"
//         height={674}
//         width={900}
//         src={images[index]}
//         alt="product"
//       />
//       <div
//         className="fixed inset-0 z-40 bg-black/80"
//         onClick={(e) => {
//           setIsImageFullView(false);
//         }}
//       ></div>

//       <div className="fixed left-0 top-0 z-50 p-2 text-sm text-gray-300">
//         {index + 1} / {images.length}
//       </div>

//       <Button
//         onClick={onBackHandler}
//         className={cn(
//           "fixed left-0 top-1/2 z-50 -translate-y-1/2 cursor-pointer",
//           index === 0 && "cursor-default opacity-55",
//         )}
//         size="icon"
//       >
//         <PiArrowLeft />
//       </Button>
//       <Button
//         onClick={() => {
//           setIsImageFullView(false);
//         }}
//         className="fixed right-0 top-0 z-50 cursor-pointer p-2"
//         size="icon"
//       >
//         <IoClose />
//       </Button>
//       <Button
//         onClick={onNextHandler}
//         className={cn(
//           "fixed right-0 top-1/2 z-50 -translate-y-1/2 cursor-pointer",
//           index + 1 === images.length && "cursor-default opacity-55",
//         )}
//         size="icon"
//       >
//         <PiArrowRight />
//       </Button>
//     </>
//   );
// };

const ImageView: React.FC<ImageViewProps> = ({
  colors,
  activeColorIndex,
  handleActiveColorIndexChange,
}) => {
  // const { activeColorIndex, index, handleChangeIndex } =
  //   useContext(ActiveColorContext);
  const imageColors = colors.map((color) => color.images);
  const [isImageFullView, setIsImageFullView] = useState(false);
  const [index, setIndex] = useState(0);

  const onNextHandler = () => {
    //this is last index condition when pointer reaches end of array
    if (
      activeColorIndex + 1 === imageColors.length &&
      imageColors[imageColors.length - 1].length === index + 1
    ) {
      return;
    }
    setIndex((prv) => prv + 1);
    if (imageColors[activeColorIndex].length === index + 1) {
      setIndex(0);
      handleActiveColorIndexChange(activeColorIndex + 1); //if an only if imageColors.length >=activeColorIndex+1
    }
    //I want to reset Index if imageColors[activecolor].length===index+1;
    //and also i want to change the selected color to selected color+1 only if imageColors.length===selected color+1
  };
  const onBackHandler = () => {
    if (index === 0 && activeColorIndex === 0) {
      return;
    }
    if (index === 0 && activeColorIndex > 0) {
      handleActiveColorIndexChange(activeColorIndex - 1);
      setIndex(imageColors[activeColorIndex].length - 1);
    } else {
      setIndex((prv) => prv - 1);
    }
  };

  const handleImageSelection = (colorIndex: number, imageIndex: number) => {
    handleActiveColorIndexChange(colorIndex);
    setIndex(imageIndex);
  };

  useEffect(() => {
    if (isImageFullView) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isImageFullView]);

  return (
    <>
      <div className="basis-7/12 gap-3">
        <div className="no-scrollbar flex h-[750px] flex-col gap-3 overflow-y-scroll">
          {imageColors.map((color, colorIndex) =>
            color.map((img, imageIndex) => (
              <Image
                onClick={() => handleImageSelection(colorIndex, imageIndex)}
                key={img}
                className={cn(
                  "h-[130px] w-[100px] ",
                  index === imageIndex && colorIndex === activeColorIndex
                    ? "opacity-100"
                    : "opacity-40",
                )}
                height={130}
                width={100}
                // // TODO Remove https by setting write filename in backend
                src={img}
                alt="product"
              />
            )),
          )}
        </div>
        <div className=" relative">
          <Image
            className=" aspect-[3/4] h-[750px] w-[674px] object-cover"
            height={674}
            width={500}
            src={imageColors[activeColorIndex][index]}
            alt="product"
          />
          {/* //TODO Make this button component   */}
          <button
            onClick={onBackHandler}
            disabled={index === 0 && activeColorIndex === 0}
            className={cn(
              "absolute left-0 top-1/2 translate-x-1/2 rounded-full bg-white p-4 shadow transition-all  hover:bg-white/20 ",
              index === 0 && activeColorIndex === 0
                ? "pointer-events-none bg-white/20 "
                : "bg-white",
            )}
          >
            <PiCaretLeftLight size={16} />
          </button>
          <button
            onClick={onNextHandler}
            // disabled={imageColors[imageColors.length-1].length === index + 1}
            className={cn(
              "absolute right-0 top-1/2  -translate-x-1/2 cursor-pointer rounded-full p-4 shadow  transition-all hover:bg-white/20 ",
              activeColorIndex + 1 === imageColors.length &&
                imageColors[imageColors.length - 1].length === index + 1
                ? "pointer-events-none bg-white/20 "
                : "bg-white",
            )}
          >
            <PiCaretRightLight size={16} />
          </button>
          <button
            onClick={() => {
              setIsImageFullView(true);
            }}
            className="absolute bottom-0 right-0  -translate-x-1/2 -translate-y-1/2 rounded-full bg-white  p-4 shadow transition-all  hover:bg-white/20 "
          >
            <LiaExpandArrowsAltSolid />
          </button>
        </div>
      </div>
      {/* {isImageFullView && (
        <FullImageView
          images={imageColors.flat()}
          setIsImageFullView={setIsImageFullView}
        />
      )} */}
    </>
  );
};

export default ImageView;
