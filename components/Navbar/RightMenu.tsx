import AuthContext from "@/store/auth-context";
import SidebarContext from "@/store/sidebar-context";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import Button from "../Button";
import SearchIcon from "../svg/SearchIcon";
import UserIcon from "../svg/UserIcon";
import HeartIcon from "../svg/HeartIcon";
import CartIcon from "../svg/CartIcon";

const RightMenu = () => {
  const router = useRouter();
  const { openSidebar } = useContext(SidebarContext);
  const { user, openAuth } = useContext(AuthContext);

  const openSidebarCartHandler = () => {
    openSidebar();
  };

  const openAuthHandler = () => {
    if (!user.token) {
      openAuth();
    } else {
      router.push("/profile");
    }
  };
  return (
    <ul className="flex items-center justify-end gap-4 lg:gap-1 xl:gap-2 2xl:gap-4 ">
      <li>
        <Button size="icon" variant="secondary">
          <SearchIcon />
        </Button>
      </li>
      <li>
        <Button size="icon" variant="secondary" onClick={openAuthHandler}>
          {/* <PiUser size={24} /> */}
          <UserIcon />
        </Button>
      </li>
      <li>
        <Button size="icon" variant="secondary">
          {/* <PiHeartStraight size={24} /> */}
          <HeartIcon />
        </Button>
      </li>
      <li className="relative">
        <Button
          size="icon"
          variant="secondary"
          onClick={openSidebarCartHandler}
        >
          {/* <PiBag size={24} /> */}
          <CartIcon />
          <span className="absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-gray-600 text-xs font-bold text-white">
            2
          </span>
        </Button>
      </li>
    </ul>
  );
};
export default RightMenu;
