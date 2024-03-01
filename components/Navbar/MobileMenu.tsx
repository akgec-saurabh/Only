import { blogMenu, homeMenu, pageMenu, shopMenu } from "@/lib/menu";
import React, { useEffect, useState } from "react";
import ArrowRight from "../svg/ArrowRight";
import { motion } from "framer-motion";
import { BsArrowLeft } from "react-icons/bs";
import ArrowLeft from "../svg/ArrowLeft";
import Button from "../Button";
import UserIcon from "../svg/UserIcon";
import Social from "../Social";

const menus = [
  {
    menu: "Home",
    subMenu: homeMenu,
  },
  {
    menu: "Shop",
    subMenu: shopMenu,
  },
  {
    menu: "Blog",
    subMenu: blogMenu,
  },
  {
    menu: "Pages",
    subMenu: pageMenu,
  },
];

const MobileMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState({ menu: "", subMenu: [] });
  const menuOpenHandler = (menu) => {
    console.log(menu);
    setSelectedMenu(menu);
  };

  const menuCloseHandler = () => {
    setSelectedMenu({ menu: "", subMenu: [] });
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      {
        document.body.style.overflow = "unset";
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ height: 0 }}
      exit={{ height: 0 }}
      animate={{ height: "auto" }}
      className="fixed left-0 top-[116px] z-40 mx-auto w-screen overflow-hidden bg-white shadow "
      transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
    >
      <motion.div
        animate={{
          translateX: selectedMenu.subMenu.length === 0 ? "0vw" : "-100vw",
        }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        className="  flex w-[200vw] border-b bg-white"
      >
        <div className="  w-screen px-[10%]">
          {menus.map((menu) => (
            <Button
              onClick={() => {
                menuOpenHandler(menu);
              }}
              variant="secondary"
              className="flex w-full items-center justify-between px-4 py-2 text-base font-medium uppercase"
            >
              <span>{menu.menu}</span>
              <ArrowRight />
            </Button>
          ))}
        </div>
        <div className="w-screen ">
          <Button
            onClick={menuCloseHandler}
            variant="secondary"
            className="flex w-full items-center justify-start  px-4 py-2 text-base font-medium uppercase"
          >
            <ArrowLeft />
            <span>{selectedMenu.menu}</span>
          </Button>
          {selectedMenu.subMenu.map((submenu) => (
            <div className="px-4 py-2 text-sm">{submenu.label}</div>
          ))}
        </div>
      </motion.div>
      <div className="my-5 flex gap-4 px-4 py-2">
        <UserIcon />
        <span>MY ACCOUNT</span>
      </div>
      <div className="my-4 px-4">
        <Social />
      </div>
    </motion.div>
  );
};

export default MobileMenu;
