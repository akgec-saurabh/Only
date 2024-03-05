"use client";
import Button from "@/components/Button";
import HeartIcon from "@/components/svg/HeartIcon";
import OrderIcon from "@/components/svg/OrderIcon";
import UserIcon from "@/components/svg/UserIcon";
import { queryClient } from "@/lib/query";
import { cn } from "@/lib/utils";
import AuthContext from "@/store/auth-context";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { FaFirstOrder } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { IoSettings, IoSettingsOutline } from "react-icons/io5";
import { PiAddressBook, PiArrowSquareRight, PiDress } from "react-icons/pi";

const data = [
  { name: "Dashboard", href: "/dashboard", icon: <UserIcon /> },
  { name: "Orders", href: "/orders", icon: <PiDress size={20} /> },
  { name: "Address", href: "/address", icon: <PiAddressBook size={20} /> },
  {
    name: "Account Details",
    href: "/account-details",
    icon: <IoSettingsOutline size={20} />,
  },
  { name: "Wishlist", href: "/wishlist", icon: <UserIcon /> },
];

const layout = ({ children }) => {
  const { logout } = useContext(AuthContext);
  const pathname = usePathname();
  const router = useRouter();
  let heading = "";

  //   const [heading,setHeading] = useState("Dashboard");
  if (pathname === "/dashboard") {
    heading = "Dashboard";
  } else if (pathname === "/orders") {
    heading = "Orders";
  } else if (pathname === "/address") {
    heading = "Address";
  } else if (pathname === "/account-details") {
    heading = "Account Details";
  } else if (pathname === "/wishlist") {
    heading = "Wishlist";
  }

  // const { data } = useQuery({
  //   queryKey: ["auth", "cart"],
  //   queryFn: () => {
  //     return axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/logout`);
  //   },
  // });
  const handleLogout = async () => {
    queryClient.invalidateQueries({ queryKey: ["auth"] });
    queryClient.invalidateQueries({ queryKey: ["cart"] });
    logout();
    router.replace("/");
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/api/auth/logout`,
      { withCredentials: true },
    );
    console.log(res.data);
  };

  return (
    <div className="xl:p- mx-auto max-w-xl overflow-hidden truncate p-4 md:max-w-2xl lg:max-w-screen-lg xl:max-w-screen-2xl">
      <h2 className="mb-12 text-[35px] font-bold uppercase">{heading}</h2>
      <div className="flex min-h-[calc(60vh)] gap-10">
        <div className="min-w-60  border-r-2 border-r-gray-200 ">
          <ul>
            {data.map((menu) => (
              <li className="flex">
                <Link
                  href={menu.href}
                  className={cn(
                    "flex w-full items-center gap-4 px-4 py-2 ",
                    menu.href !== pathname && "text-gray-500",
                  )}
                >
                  {menu.icon}
                  <span>{menu.name}</span>
                </Link>
                {menu.href === pathname && (
                  <span className="inline-block h-8 w-1 rounded-bl rounded-tl bg-rose-500"></span>
                )}
              </li>
            ))}
            <li className="flex">
              <button
                onClick={handleLogout}
                className={cn(
                  "flex w-full items-center gap-4 px-4 py-2 text-rose-500 ",
                )}
              >
                <PiArrowSquareRight size={20} />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex-shrink-0">{children}</div>
      </div>
    </div>
  );
};

export default layout;
