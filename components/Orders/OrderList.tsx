"use client";

import React, { useContext, useEffect } from "react";
import Button from "../Button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AuthContext from "@/store/auth-context";
import { useRouter } from "next/navigation";

const OrderList = () => {
  const { user } = useContext(AuthContext);

  const { data, isPending, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: () => {
      return axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/orders`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
    },
  });

  console.log(data?.data);

  return (
    <div>
      <table className="w-full text-start">
        <thead>
          <tr>
            <th className="text-start">ORDER</th>
            <th className="text-start">DATE</th>
            <th className="text-start">STATUS</th>
            <th className="text-start">TOTAL</th>
            <th className="text-start">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.orders.length === 0 ? (
            <div>Its Empty</div>
          ) : (
            data?.data.orders.map((order) => (
              <tr>
                <td>{order.orderId}</td>
                <td>October 1, 2023</td>
                <td>On hold</td>
                <td>Rs.1,200.65 for 3 items</td>
                <td>
                  <Button>View</Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
