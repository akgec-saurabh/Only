export interface ProductQuantityProps {
  size: "sm" | "md";
  quantity: number;
  onDecreaseQuantity: () => void;
  onIncreaseQuantity: () => void;
  className?: string;
}

export interface QuantitySizesProps {
  sm: {
    icon: number;
    text: string;
    buttonSize: "xs";
  };
  md: {
    icon: number;
    text: string;
    buttonSize: "xs";
  };
}
