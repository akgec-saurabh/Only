"use client";
import AuthContext from "@/store/auth-context";
import React, { useContext } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    router.replace("/");
  };

  return (
    <>
      <div>
        Name : {user.name.firstName} {user.name.lastName}
      </div>
      <div>Email : {user.email}</div>
      <div>JWT TOKEN : </div>
      <pre className="w-full max-w-xl overflow-hidden text-pretty break-words">
        {user.token}
      </pre>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};

export default UserProfile;
