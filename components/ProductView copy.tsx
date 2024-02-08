import Image from "next/image";
import React from "react";
import Button from "@/components/Button";
import ProductQuantity from "@/components/ProductView/ProductQuantity";
import {
  PiHeartStraight,
  PiHeartStraightBold,
  PiShareNetwork,
  PiShareNetworkBold,
} from "react-icons/pi";
import ProductDetail from "./ProductDetail/ProductDetail";
import ProductNavbar from "./ProductView/ProductNavbar";

const product = {
  name: "Lightweight Puffer Jacket With a Hood",
  price: 4500,
  description: {
    heading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, in.",
    short:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis esse ea ab pariatur, harum, voluptates molestias dolor consequatur itaque architecto quae sunt dolorem rerum mollitia adipisci, vel quo sint quam ducimus excepturi quas rem nostrum aspernatur? Assumenda, animi dolores! Ipsa!",
    long: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea est illum culpa adipisci corporis? Repellat alias consectetur, cum deleniti, quidem optio quo, quis molestias velit error reiciendis porro. Molestiae, aliquam placeat! Dignissimos nemo sit, enim rem neque totam ipsam quidem soluta cumque quod culpa quo corporis architecto distinctio deserunt iure cupiditate quibusdam repellendus quasi voluptatem? Fugiat ad dolorem veritatis. Ea neque voluptates dolore libero ducimus fugiat rem assumenda facere, velit, aspernatur placeat doloribus perferendis perspiciatis voluptatum consectetur quae corrupti consequuntur eaque natus omnis autem labore corporis ullam? Sit beatae praesentium hic, incidunt harum deserunt, accusamus alias consectetur nesciunt, pariatur nobis.",
  },
  sku: 487187,
  categories: ["Casual & Urban Wear", "Jackets"],
  tags: ["biker", "black", "bomber", "leather"],

  additionalInformation: {
    weight: "1.25 kg",
    dimensions: {
      length: 90,
      width: 60,
      height: 90,
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Orange", "White"],
    storage: "Relaxed fit shirt-style dress with a rugged",
  },
  productInfo: {
    features: [
      "Creat by cotton fibric with soft and smooth",
      "Simple, Configurable (e.g. size, color, etc.), bundled",
      "Downloadable/Digital Products, Virtual Products",
    ],
    sampleNumberList: [
      "Create Store-specific attributes on the fly",
      "Simple, Configurable (e.g. size, color, etc.), bundled",
      "Downloadable/Digital Products, Virtual Products",
    ],
    lining: "100% Polyester, Main: 100% Polyester.",
  },
  reviews: [
    {
      author: "Janice Miller",
      date: "April 06, 2023",
      rating: 4,
      content:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est…",
    },
    {
      author: "Benjam Porter",
      date: "April 06, 2023",
      rating: 5,
      content:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est…",
    },
  ],
};

// A Component that receives product and display them
const ProductView = () => {
  const categories = product.categories.join(", ");
  const tags = product.tags.join(", ");

  return (
    <div className="mx-auto max-w-screen-2xl px-16 py-2">
      {/* For Product Image Slider and Image */}
      <div className="flex gap-14">
        <div className="relative  h-[674px] w-[674px] flex-1  flex-shrink-0 overflow-hidden">
          <Image className="object-cover" src="/image.jpg" alt="product" fill />
        </div>
        <div className=" flex-1 flex-shrink-0">
          <ProductNavbar />
          <h1 className="mb-2 text-[26px] font-medium">{product.name} </h1>
          {/* For Product Information */}
          <div className="mb-7 text-2xl font-medium">
            <span> &#8377;{product.price}</span>
          </div>
          <p className="mb-4 text-sm leading-7">{product.description.short}</p>
          <div className="mb-8 flex gap-4">
            <div className="flex items-center justify-center border px-4">
              <ProductQuantity size="md" />
            </div>
            <Button size="lg">add to cart</Button>
          </div>

          <div className="mb-8 flex items-center gap-2">
            <Button variant="secondary" className="px-0 pr-4">
              <PiHeartStraight size={20} />
              <span className="ml-2">add to wishlist</span>
            </Button>
            <Button variant="secondary">
              <PiShareNetwork size={20} />
              <span className="ml-2">Share</span>
            </Button>
          </div>

          {/* SKU CATEGORIS AND TAGS */}
          <div className="space-y-1 text-sm">
            <div>
              <span className="text-primary/45">SKU : </span> {product.sku}
            </div>
            <div className="capitalize">
              <span className="text-primary/45">CATEGORIES : </span>
              {categories}
            </div>
            <div className="capitalize">
              <span className="text-primary/45">TAGS : </span>
              {tags}
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <ProductDetail
        description={{
          ...product.description,
          productInfo: product.productInfo,
        }}
        additionalInformation={product.additionalInformation}
        reviews={product.reviews}
      />
    </div>
  );
};

export default ProductView;
