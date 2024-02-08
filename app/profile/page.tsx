import UserProfile from "@/components/UserProfile";
import React from "react";

const page = () => {
  return (
    <div className="max-width-container">
      <h2 className="mb-12 text-[35px] font-bold uppercase">PROFILE</h2>
      <UserProfile />
    </div>
  );
};

export default page;
