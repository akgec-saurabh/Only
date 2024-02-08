import React from "react";

import LeftMenu from "@/components/Navbar/LeftMenu";
import RightMenu from "@/components/Navbar/RightMenu";
import Logo from "@/components/Navbar/Logo";

const Navbar = () => {
  return (
    <div className="relative mx-auto hidden w-full grid-cols-3 px-4 lg:grid lg:max-w-screen-lg  xl:max-w-screen-2xl xl:px-10">
      <LeftMenu />
      <div className="flex items-center justify-center ">
        <Logo />
      </div>
      <RightMenu />
    </div>
  );
};

export default Navbar;
