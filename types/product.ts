export interface descriptionProps {
  heading: string;
  short: string;
  long: string;
  productInfo: productInfoProps;
}

export interface productInfoProps {
  features?: string[];
  sampleNumberList?: string[];
  lining?: string;
}

export interface additionalInformationProps {
  weight: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  sizes: string[];
  colors: string[];
  storage: string;
}

export interface reviewsProps {
  author: string;
  date: string;
  rating: number;
  content: string;
}

export interface productDetailProps {
  description: descriptionProps;
  additionalInformation: additionalInformationProps;
  reviews: reviewsProps[];
}
