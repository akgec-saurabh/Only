"use client";
import React, { useEffect, useState } from "react";
import ArrowLeft from "./svg/ArrowLeft";
import ArrowRight from "./svg/ArrowRight";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface PaginationProps {
  totalItems?: number;
  itemPerPage?: number;
  noOfPagesToShow?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems = 22,
  itemPerPage = 3,
  noOfPagesToShow = 4,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const totalPages = Math.ceil(totalItems / itemPerPage);
  const pagesToShow =
    totalPages > noOfPagesToShow ? noOfPagesToShow : totalPages;

  const [currentPage, setCurrentPage] = useState(1);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const currentIndex = Math.floor((currentPage - 1) / noOfPagesToShow);

    for (
      let i = 1 + currentIndex * pagesToShow;
      i <= Math.min((currentIndex + 1) * pagesToShow, totalPages);
      i++
    ) {
      pageNumbers.push(
        <div
          // href={`?page=${i}`}
          key={i}
          className={cn(
            "group relative m-[2px] flex size-10 cursor-pointer  items-center  justify-center rounded  font-medium text-primary",
            i === currentPage ? "" : " text-primary hover:bg-gray-100 ",
          )}
          onClick={() => {
            setCurrentPage(i);
          }}
        >
          {i === currentPage && (
            <motion.div
              layoutId="active-pill"
              className={cn("absolute inset-0 z-20 rounded  bg-rose-500  ")}
              transition={{ duration: 0.5, type: "spring" }}
            ></motion.div>
          )}
          <span className={cn(" relative z-10 text-black ")}>{i}</span>
          <span
            className={cn(
              " absolute z-30 text-white mix-blend-color-dodge  ",
              i !== currentPage && "group-hover:mix-blend-darken",
            )}
          >
            {i}
          </span>
        </div>,
      );
    }
    return pageNumbers;
  };

  useEffect(() => {
    const hasPageQuery = searchParams.has("page");
    if (hasPageQuery) {
      console.log(hasPageQuery);
      const queryPage = parseInt(searchParams.get("page") || "1");
      if (queryPage <= totalPages) {
        setCurrentPage(queryPage);
      } else {
        setCurrentPage(1);
      }
    }
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(searchParams.toString());
    query.set("page", currentPage.toString());
    router.push("?" + query.toString());
  }, [currentPage]);

  return (
    <div className="mx-auto my-2 flex w-max  select-none items-center justify-center overflow-hidden rounded shadow">
      <div
        className="m-[2px] flex size-10 cursor-pointer items-center justify-center rounded font-medium text-rose-500 transition-all hover:bg-gray-100/90"
        onClick={() => {
          if (currentPage === 1) {
            return;
          }
          setCurrentPage(currentPage - 1);
          router.push(`?page=${currentPage - 1}`);
        }}
      >
        <ArrowLeft />
      </div>
      <div className="h-10 w-[1px] rounded-full bg-gray-100"></div>
      <div className="flex items-center ">{renderPageNumbers()}</div>
      <div className="h-10 w-[1px] rounded-full bg-gray-100"></div>

      <div
        className="m-[2px] flex size-10  cursor-pointer items-center justify-center rounded font-medium text-rose-500 transition-all hover:bg-gray-100/90"
        onClick={() => {
          if (currentPage === totalPages) {
            return;
          }
          setCurrentPage(currentPage + 1);
          router.push(`?page=${currentPage + 1}`);
        }}
      >
        <ArrowRight />
      </div>
    </div>
  );
};

export default Pagination;
