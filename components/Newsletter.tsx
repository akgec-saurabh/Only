import React from "react";
import Button from "./Button";

const Newsletter = () => {
  return (
    <div className="pt-12 text-center">
      <p className="mb-4 text-2xl font-medium">Get 10% Off</p>
      <p className="mb-6 text-sm">
        Be the first to get the latest news about trends, promotions, and much
        more!
      </p>
      <div className="mx-auto flex flex-col items-center justify-center gap-4">
        <input
          type="text"
          className="w-full max-w-xl bg-[#353535] px-2 py-4 outline-none placeholder:text-sm placeholder:text-white"
          placeholder="Your email address"
        />
        <Button
          className="w-full max-w-md bg-neutral-500 text-white md:py-4"
          variant="secondary"
        >
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
