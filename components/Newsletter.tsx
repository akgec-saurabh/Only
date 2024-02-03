import React from "react";

const Newsletter = () => {
  return (
    <div className="text-center pt-24">
      <p className="text-2xl font-medium mb-4">Get 10% Off</p>
      <p className="text-sm mb-6">
        Be the first to get the latest news about trends, promotions, and much
        more!
      </p>
      <div className="flex gap-4 mx-auto justify-center items-center">
        <input
          type="text"
          className="py-4 px-2 bg-[#353535] w-full max-w-xl placeholder:text-sm placeholder:text-white outline-none"
          placeholder="Your email address"
        />
        <button className="bg-[#5C5C5C] py-4 px-6">Join Now</button>
      </div>
    </div>
  );
};

export default Newsletter;
