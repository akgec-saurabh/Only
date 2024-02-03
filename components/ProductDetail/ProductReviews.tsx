import { reviewsProps } from "@/types/product";
import Image from "next/image";
import React from "react";

//TODO : add userid,

interface ProductReviewsProps {
  reviews: reviewsProps[];
}
const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews }) => {
  return (
    <div className="py-12">
      <h2 className="text-lg font-medium mb-6"> Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          // TODO add userid instead of key
          <UserReview key={review.author + review.content} {...review} />
        ))}
      </div>
    </div>
  );
};

const UserReview = ({
  author,
  date,
  content,
  rating,
}: {
  author: string;
  date: string;
  content: string;
  rating: number;
}) => {
  return (
    <>
      <div className="flex text-sm text-gray-600">
        <Image
          className="rounded-full shadow flex-shrink-0 object-cover mr-10 w-16 h-16"
          src="/user.jpg"
          alt="User Profile Photo"
          width={64}
          height={64}
        />
        <div className="flex flex-col mb-4">
          <div className="flex justify-between items-center">
            <div className="flex justify-center flex-col mb-2">
              <div className="text-primary">{author}</div>
              <div>{date}</div>
            </div>
            {/* TODO Rating component */}
            <div className="justify-end">{rating}</div>
          </div>
          <div>{content}</div>
        </div>
      </div>
      <div className="w-full h-[0.2px] bg-gray-300"></div>
    </>
  );
};

export default ProductReviews;
