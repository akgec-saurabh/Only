export interface ProductProps {
  id: string;
  name: string;
  sku: string;
  price: number;
  sizes: string[];
  images: string[];
  mainCategory: string;
  categories: string[];
  tags: string[];
  description: DescriptionProps;
  productInfo: ProductInfoProps;
  additionalInformation: AdditionalInformationProps;
}

export interface DescriptionProps {
  heading: string;
  short: string;
  long: string;
}

export interface ProductInfoProps {
  features: string[];
  sampleNumberList: string[];
  lining: string;
}

export interface SizeProps {
  size: string;
  price: number;
  _id: string;
}

export interface ColorProps {
  name: string;
  code: string;
  images: string[];
  sizes: SizeProps[];
  _id: string;
}

export interface AdditionalInformationProps {
  weight: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  colors: ColorProps[];
  storage: string;
}

// export interface reviewsProps {
//   author: string;
//   date: string;
//   rating: number;
//   content: string;
// }

// export interface ProductDetailProps {
//   description: DescriptionProps;
//   additionalInformation: AdditionalInformationProps;
//   reviews?: reviewsProps[];
// }

export interface CartItem {
  id: string;
  name: string;
  image: string;
  color: string;
  colorIndex?: number;
  size: string;
  sizeIndex?: number;
  quantity: number;
  price: number;
}
