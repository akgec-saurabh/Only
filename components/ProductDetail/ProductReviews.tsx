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
      <h2 className="mb-6 text-lg font-medium"> Reviews</h2>
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
          className="mr-10 h-16 w-16 flex-shrink-0 rounded-full object-cover shadow"
          src="/user.jpg"
          alt="User Profile Photo"
          width={64}
          height={64}
        />
        <div className="mb-4 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="mb-2 flex flex-col justify-center">
              <div className="text-primary">{author}</div>
              <div>{date}</div>
            </div>
            {/* TODO Rating component */}
            <div className="justify-end">{rating}</div>
          </div>
          <div>{content}</div>
        </div>
      </div>
      <div className="h-[0.2px] w-full bg-gray-300"></div>
    </>
  );
};

export default ProductReviews;
