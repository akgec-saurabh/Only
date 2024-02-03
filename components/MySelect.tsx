"use client";
import { cn } from "@/lib/utils";
import { ErrorMessage, Field, useFormikContext } from "formik";
import React, { SelectHTMLAttributes } from "react";

interface MySelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  as: string;
}

const MySelect: React.FC<MySelectProps> = ({ label, as, ...props }) => {
  const { errors, touched } = useFormikContext();
  const fieldName = props.name as keyof typeof errors;

  const hasError = errors[fieldName] && touched[fieldName];
  return (
    <div className="relative">
      <Field
        name={props.name}
        as={as}
        className={cn(
          "border py-4 px-5 peer focus:outline-none focus:ring-1 block w-full appearance-none bg-white text-gray-500 text-sm",
          hasError ? "ring-1 ring-red-600" : "focus:ring-black"
        )}
      >
        <option className="border py-4 px-5 appearance-none" value="" disabled>
          Choose a Country...
        </option>
        <option className="border py-4 px-5 appearance-none" value="in">
          b
        </option>
        <option className="border py-4 px-5 appearance-none" value="pi">
          pi
        </option>
      </Field>

      <label
        className={cn(
          "absolute text-gray-500 px-1 text-sm left-4 top-0 -translate-y-1/2 peer-focus:-translate-y-1/2 peer-focus:top-0 bg-secondary transition-all",
          hasError && "text-red-600"
        )}
        htmlFor={props.name}
      >
        {label}
      </label>
      {/* <ErrorMessage name={props.name} /> */}
    </div>
  );
};

export default MySelect;
