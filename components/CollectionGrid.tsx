import Image from "next/image";
import React from "react";

const CollectionGrid = () => {
  return (
    <div className="max max-width-container grid h-[600px] w-full grid-cols-4 grid-rows-2 gap-7 px-16">
      <div className="relative col-start-1 col-end-3 row-span-full flex flex-col bg-sky-300">
        <Image
          className="object-cover"
          src="/banner1.jpg"
          fill
          alt="Women Collection Banner"
        />
        <div className="relative z-10 mt-auto space-y-2 p-10">
          <div className="text-sm">HOT LIST</div>
          <div className="text-3xl">
            <strong>WOMEN</strong> COLLECTION
          </div>
          <div>SHOP NOW</div>
        </div>
      </div>
      <div className="relative col-start-3 col-end-5 flex flex-col bg-pink-300">
        <Image
          className="object-cover"
          src="/banner2.jpg"
          fill
          alt="Men Collection Banner"
        />
        <div className="relative z-10 mt-auto space-y-2 p-10">
          <div className="text-sm">HOT LIST</div>
          <div className="text-3xl">
            <strong>MEN</strong> COLLECTION
          </div>
          <div>SHOP NOW</div>
        </div>
      </div>
      <div className="relative col-start-3 col-end-4 row-start-2 flex flex-col bg-gray-300">
        <Image
          className="object-cover"
          src="/banner3.jpg"
          fill
          alt="Women Collection Banner"
        />
        <div className="relative z-10 mt-auto space-y-2 p-10">
          <div className="text-sm">HOT LIST</div>
          <div className="text-3xl">
            <strong>KIDS</strong> COLLECTION
          </div>
          <div>SHOP NOW</div>
        </div>
      </div>
      <div className="relative col-start-4 col-end-5 row-start-2 flex flex-col bg-green-300">
        <Image
          className="object-cover"
          src="/banner4.jpg"
          fill
          alt="Women Collection Banner"
        />
        <div className="relative z-10 mt-auto space-y-2 p-10">
          <div className="text-sm">HOT LIST</div>
          <div className="text-3xl">
            <strong>FOOTWEAR</strong> COLLECTION
          </div>
          <div>SHOP NOW</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionGrid;
