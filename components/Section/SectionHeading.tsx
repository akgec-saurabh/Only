import { cn } from "@/lib/utils";
import { SectionHeadingProps } from "@/types/components/Section/SectionHeadingTypes";
import Link from "next/link";
import React from "react";

const cartSections = [
  {
    id: "01",
    title: "SHOPPING BAG",
    description: "Manage Your Items List",
    url: "/cart",
  },
  {
    id: "02",
    title: "SHIPPING AND CHECKOUT",
    description: "Checkout Your Items List",
    url: "/checkout",
  },
  {
    id: "03",
    title: "CONFIRMATION",
    description: "Review And Submit Your Order",
    url: "/confirmation",
  },
];

const SectionHeading: React.FC<SectionHeadingProps> = ({ width }) => {
  return (
    <>
      <div className="flex w-full">
        {cartSections.map((section) => (
          <Link href={section.url} className="flex flex-1 gap-4 pb-4">
            <div className="text-lg font-medium">{section.id}</div>
            <div>
              <span className="block text-lg font-medium">{section.title}</span>
              <em className="block text-sm text-gray-500">
                {section.description}
              </em>
            </div>
          </Link>
        ))}
      </div>
      <div className="relative mb-6 h-[2px] w-full bg-gray-200">
        <div className={cn("h-[2px] bg-primary", width)}></div>
      </div>
    </>
  );
};

export default SectionHeading;
