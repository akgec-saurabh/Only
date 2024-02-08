import React from "react";
import DropDown from "./DropDown";
import Button from "../Button";
import { blogMenu, homeMenu, pageMenu, shopMenu } from "@/lib/menu";

const LeftMenu = () => {
  return (
    <ul className="flex items-center justify-between text-sm font-medium uppercase">
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

export default LeftMenu;
