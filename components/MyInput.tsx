import React, { InputHTMLAttributes } from "react";

import { useField } from "formik";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const MyInput: React.FC<MyInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="relative w-full">
      <input
        className="peer relative z-20 w-full border-none bg-transparent px-3 py-3 outline-none ring-1 ring-gray-200 focus:ring-primary"
        {...field}
        {...props}
        placeholder=" "
      />
      <label
        className="absolute -top-3 left-2 z-30 cursor-text  bg-white px-2 text-sm text-gray-500 transition-all  peer-placeholder-shown:left-2  peer-placeholder-shown:top-3 peer-placeholder-shown:z-10  peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:z-30 peer-focus:bg-white"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>

      {meta.touched && meta.error ? (
        <div className="my-1 text-sm capitalize text-red-600">
          <span className="flex items-center gap-2">{meta.error}</span>
        </div>
      ) : null}
    </div>
  );
};

export default MyInput;
