"use client";
import { cn } from "@/lib/utils";
import { ErrorMessage, Field, useField, useFormikContext } from "formik";
import React, { SelectHTMLAttributes } from "react";

interface MySelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  as: string;
}

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

const MySelect: React.FC<MySelectProps> = ({ label, as, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="relative">
      <select
        {...field}
        {...props}
        className={cn(
          "peer block w-full appearance-none border bg-white px-5 py-4 text-sm text-black focus:outline-none focus:ring-1",
          "focus:ring-black",
        )}
      >
        <option className="appearance-none border px-5 py-4" value="" disabled>
          Choose a Country...
        </option>
        {states.map((state, i) => (
          <option
            key={state}
            className="appearance-none border px-5 py-4"
            value={state}
          >
            {state}
          </option>
        ))}
      </select>
      <label
        className="absolute left-4 top-0 -translate-y-1/2 bg-secondary px-1 text-sm text-gray-500 transition-all peer-focus:top-0 peer-focus:-translate-y-1/2"
        htmlFor={props.name}
      >
        {label}
      </label>
      {meta.touched && meta.error ? (
        <div className="my-1 text-sm capitalize text-red-600">
          <span className="flex items-center gap-2">{meta.error}</span>
        </div>
      ) : null}{" "}
    </div>
  );
};

export default MySelect;
