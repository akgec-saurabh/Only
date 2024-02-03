import { cn } from "@/lib/utils";
import { ErrorMessage, Field, useFormikContext } from "formik";
import React, { InputHTMLAttributes } from "react";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const MyInput: React.FC<MyInputProps> = ({ label, ...props }) => {
  const { errors, touched } = useFormikContext();
  const fieldName = props.name as keyof typeof errors;

  const hasError = errors[fieldName] && touched[fieldName];

  return (
    <div className="relative w-full">
      <Field
        className={cn(
          "peer block w-full border px-5 py-4 focus:outline-none focus:ring-1",
          hasError ? "ring-1 ring-red-600" : "focus:ring-black",
        )}
        id={props.name}
        name={props.name}
        type="text"
        placeholder=" "
      />
      <label
        className={cn(
          "absolute left-4 top-0 -translate-y-1/2 bg-secondary px-1 text-sm text-gray-500 transition-all  peer-placeholder-shown:top-[8px] peer-placeholder-shown:translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-1/2",
          hasError && "text-red-600",
        )}
        htmlFor={props.name}
      >
        {label}
      </label>
      {/* <ErrorMessage
        component="div"
        className="text-red-600 text-xs"
        name={props.name}
      /> */}
    </div>
  );
};

export default MyInput;
