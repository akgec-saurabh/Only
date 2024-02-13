"use client";
import AuthContext from "@/store/auth-context";
import React, { useContext } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { queryClient } from "@/lib/query";

const UserProfile = () => {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    queryClient.invalidateQueries({ queryKey: ["auth"] });
    queryClient.invalidateQueries({ queryKey: ["cart"] });
    logout();
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
