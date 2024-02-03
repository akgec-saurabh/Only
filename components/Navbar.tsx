import React, { useContext } from "react";
import { GoSearch } from "react-icons/go";
import { PiBag, PiHeartStraight, PiUser } from "react-icons/pi";
import Logo from "@/components/Logo";
import Button from "./Button";
import { blogMenu, homeMenu, pageMenu, shopMenu } from "@/lib/menu";
import SidebarContext from "@/store/sidebar-context";

const DropDown = ({
  label,
  menu,
}: {
  label: string;
  menu: {
    label: string;
    href: string;
  }[];
}) => {
  return (
    <div className="group relative">
      <Button variant="link">{label}</Button>

      <div className="absolute  -left-7 top-full z-10 hidden w-64 bg-transparent pt-6  group-hover:block ">
        <div className="bg-secondary px-7  pb-4 shadow ">
          {menu.map((item) => (
            <Button
              className="block text-sm font-normal capitalize"
              key={item.label}
              variant="link"
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

const LeftMenu = () => {
  return (
    <ul className="flex items-center gap-8 justify-self-start text-sm font-medium uppercase">
      <li className="group relative">
        <DropDown label="Home" menu={homeMenu} />
      </li>
      <li>
        <DropDown label="Shop" menu={shopMenu} />
      </li>
      <li>
        <DropDown label="Blog" menu={blogMenu} />
      </li>
      <li>
        <DropDown label="Pages" menu={pageMenu} />
      </li>
      <li>
        <Button variant="link">About</Button>
      </li>
      <li>
        <Button variant="link">Contact</Button>
      </li>
    </ul>
  );
};

const RightMenu = () => {
  const sidebarCtx = useContext(SidebarContext);

  const openSidebarCartHandler = () => {
    sidebarCtx.openSidebar();
  };
  return (
    <ul className="flex items-center  gap-6 justify-self-end">
      <li>
        <GoSearch size={24} />
      </li>
      <li>
        <PiUser size={24} />
      </li>
      <li>
        <PiHeartStraight size={24} />
      </li>
      <li className="relative">
        <Button
          size="icon"
          variant="secondary"
          onClick={openSidebarCartHandler}
        >
          <PiBag size={24} />
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-600 text-xs font-bold text-white">
            2
          </span>
        </Button>
      </li>
    </ul>
  );
};

const Navbar = () => {
  return (
    <div className=" max-width-container relative grid h-full  grid-cols-3">
      <LeftMenu />
      <div className="flex items-center justify-center justify-self-center">
        <Logo />
      </div>
      <RightMenu />
    </div>
  );
};

export default Navbar;
