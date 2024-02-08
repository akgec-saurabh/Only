import React from "react";
import Button from "../Button";

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

export default DropDown;
