import Image from "next/image";
import React from "react";
import Button from "../Button";
import { ColorProps } from "@/types/product";
import { cn } from "@/lib/utils";

interface ProductSelectorProps {
  colors: ColorProps[];
  handleActiveColorIndexChange: (colorIndex: number) => void;
  handleActiveSizeIndexChange: (sizeIndex: number) => void;
  activeColorIndex: number;
  activeSizeIndex: number;
}

const ProductSelector: React.FC<ProductSelectorProps> = ({
  colors,
  handleActiveColorIndexChange,
  handleActiveSizeIndexChange,
  activeColorIndex,
  activeSizeIndex,
}) => {
  const handleColorSelection = (colorIndex: number) => {
    handleActiveColorIndexChange(colorIndex);
  };

  const handleSizeSelection = (sizeIndex: number) => {
    handleActiveSizeIndexChange(sizeIndex);
  };
  return (
    <div className="mb-4 space-y-4">
      <div className="mb-7 text-2xl font-medium">
        <span>
          &#8377;{colors[activeColorIndex].sizes[activeSizeIndex].price}
        </span>
      </div>
      <div>Color : {colors[activeColorIndex].name}</div>
      <div className="flex gap-4">
        {colors.map((color, colorIndex) => (
          <Image
            className={cn(
              "h-20 w-20 border border-black object-cover",
              activeColorIndex === colorIndex ? "opacity-100" : "opacity-40",
            )}
            key={color._id}
            width={100}
            height={120}
            src={color.images[0]}
            alt={color.name}
            onClick={() => handleColorSelection(colorIndex)}
          />
        ))}
      </div>
      <div className="flex gap-4">
        {colors[activeColorIndex].sizes.map((size, sizeIndex) => (
          <Button
            key={size._id}
            onClick={() => handleSizeSelection(sizeIndex)}
            size="sm"
            variant={sizeIndex === activeSizeIndex ? "default" : "secondary"}
            className="border"
          >
            {size.size}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductSelector;
