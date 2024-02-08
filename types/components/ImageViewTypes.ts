import { ColorProps } from "../product";

export interface ImageViewProps {
  colors: ColorProps[];
  activeColorIndex: number;
  handleActiveColorIndexChange: (colorIndex: number) => void;
}
