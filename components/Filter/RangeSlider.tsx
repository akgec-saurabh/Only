"use client";

import React, { useEffect, useRef, useState } from "react";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";

interface clampProps {
  number: number;
  min: number;
  max: number;
}

const clamp = (number: number, min: number, max: number): number => {
  return Math.min(max, Math.max(number, min));
};

interface SliderRangeProps {
  min: number;
  max: number;
  onMinChange: (minPriceChange: number) => void;
  onMaxChange: (maxPriceChange: number) => void;
}

const SliderRange: React.FC<SliderRangeProps> = ({
  min = 0,
  max = 100,
  onMinChange,
  onMaxChange,
}) => {
  const handleSize = 24;
  const step = 10;
  const minConstraintRef = useRef();
  const maxConstraintRef = useRef();
  const progressBarRef = useRef();
  const minHandleRef = useRef();
  const maxHandleRef = useRef();
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(max - min);
  const [minDragging, setMinDragging] = useState(false);
  const [maxDragging, setMaxDragging] = useState(false);
  const minHandleX = useMotionValue(0);
  const maxHandleX = useMotionValue(0);
  const widthOfMinHandle = useTransform(maxHandleX, (v) => v);
  const leftOfMaxHandle = useTransform(minHandleX, (v) => v + handleSize);
  const progressMin = useTransform(minHandleX, (v) => v + handleSize / 2);
  const progressMax = useTransform(maxHandleX, (v) => v + handleSize / 2);
  const background = useMotionTemplate`linear-gradient(90deg,#ddd ${progressMin}px,#191919 ${progressMin}px, #191919 ${progressMax}px, #ddd 0px)`;

  const handleProgressSelect = (event) => {
    console.log("down");
    const { left, width } = progressBarRef.current.getBoundingClientRect();
    const position = event.pageX - left;
    const newProgress = clamp(position / width, 0, 1);
    console.log(newProgress);
    const newValue = newProgress * (max - min);

    //check which handle is close than set that
    const minhandleBounds = minHandleRef.current.getBoundingClientRect();
    const middleOfMinHandle = minhandleBounds.x + minhandleBounds.width / 2;
    const distanceOfMinHandle = Math.abs(middleOfMinHandle - position - left);
    const maxhandleBounds = maxHandleRef.current.getBoundingClientRect();
    const middleOfMaxHandle = maxhandleBounds.x + maxhandleBounds.width / 2;
    const distanceOfMaxHandle = Math.abs(middleOfMaxHandle - position - left);

    console.log(distanceOfMinHandle + distanceOfMaxHandle, "sum");
    // if (distanceOfMaxHandle + distanceOfMinHandle < 2 * handleSize) {
    //   console.log("cannot move");
    // } else {
    if (distanceOfMinHandle > distanceOfMaxHandle) {
      setMaxValue(newValue);
      animate(maxHandleX, newProgress * width);
    } else {
      setMinValue(newValue);
      animate(minHandleX, newProgress * width);
      //   }
    }
  };

  const handleMinDrag = () => {
    const progressBarBounds = progressBarRef.current.getBoundingClientRect();
    const handleBounds = minHandleRef.current.getBoundingClientRect();
    const middleOfHandle = handleBounds.x + handleBounds.width / 2;
    const newProgress =
      (middleOfHandle - progressBarBounds.x) / progressBarBounds.width;
    setMinValue(newProgress * (max - min));
  };
  const handleMaxDrag = () => {
    const progressBarBounds = progressBarRef.current.getBoundingClientRect();
    const handleBounds = maxHandleRef.current.getBoundingClientRect();
    const middleOfHandle = handleBounds.x + handleBounds.width / 2;
    const newProgress =
      (middleOfHandle - progressBarBounds.x) / progressBarBounds.width;
    setMaxValue(newProgress * (max - min));
  };

  useEffect(() => {
    console.log("rendered");
    onMinChange(minValue + min - (minValue % 10));
    onMaxChange(maxValue + min - (maxValue % 10));
  }, [minValue, maxValue]);

  useEffect(() => {
    const minPosition = minValue / (max - min);
    const maxPosition = maxValue / (max - min);
    const { width } = progressBarRef.current.getBoundingClientRect();
    minHandleX.set(minPosition * width);
    maxHandleX.set(maxPosition * width);
    return () => {
      minHandleX.set(0);
      maxHandleX.set(0);
    };
  }, [minValue, maxValue, min, max, minHandleX, maxHandleX]);

  return (
    <div className="mx-auto max-w-xl py-4">
      <div
        data-test="slider"
        className="relative flex h-8 flex-col justify-center"
      >
        <motion.div
          data-test="slider-background"
          className="absolute h-3 w-full rounded-full"
          style={{ background }}
        ></motion.div>
        <div
          data-test="slider-progressBar"
          className="absolute  h-2"
          style={{ left: handleSize / 2, right: handleSize / 2 }}
          ref={progressBarRef}
        ></div>
        <motion.div
          data-test="slider-min-constraint"
          className="absolute h-6 "
          ref={minConstraintRef}
          style={{ width: widthOfMinHandle }}
        ></motion.div>
        <motion.div
          data-test="slider-max-constraint"
          className="absolute h-6 "
          ref={maxConstraintRef}
          style={{ left: leftOfMaxHandle, right: 0 }}
        ></motion.div>
        <motion.div
          data-test="slider-handle"
          className={`absolute z-10 rounded-full border-2 border-black bg-white shadow ${
            minDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            width: handleSize,
            height: handleSize,
            x: minHandleX,
          }}
          drag="x"
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={minConstraintRef}
          ref={minHandleRef}
          onDrag={handleMinDrag}
          onDragStart={() => setMinDragging(true)}
          onDragEnd={() => setMinDragging(false)}
          onPointerDown={() => setMinDragging(true)}
          onPointerUp={() => setMinDragging(false)}
          animate={{ scale: minDragging ? 1.4 : 1 }}
        ></motion.div>
        <motion.div
          data-test="slider-handle"
          className={`absolute z-10 rounded-full border-2 border-black bg-white shadow ${
            maxDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ width: handleSize, height: handleSize, x: maxHandleX }}
          drag="x"
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={maxConstraintRef}
          ref={maxHandleRef}
          onDrag={handleMaxDrag}
          onDragStart={() => setMaxDragging(true)}
          onDragEnd={() => setMaxDragging(false)}
          onPointerDown={() => setMaxDragging(true)}
          onPointerUp={() => setMaxDragging(false)}
          animate={{ scale: maxDragging ? 1.4 : 1 }}
        ></motion.div>
        <div
          data-test="slider-clickable-area"
          className="absolute  h-4  w-full"
          onPointerDown={(event) => {
            handleProgressSelect(event);
          }}
        ></div>
      </div>
      <div className="my-2 flex select-none items-center justify-between">
        <span>
          <span className="text-gray-500">Min Price : </span>
          <span>{(minValue + min - (minValue % 10)).toFixed(2)}</span>
        </span>
        <span>
          <span className="text-gray-500">Max Price : </span>
          <span>{(maxValue + min - (maxValue % 10)).toFixed(2)}</span>
        </span>
      </div>
    </div>
  );
};

export default SliderRange;
