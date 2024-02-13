import React, { useContext, useState } from "react";

import { useFormik } from "formik";

import * as Yup from "yup";
import { BiError } from "react-icons/bi";
import Button from "@/components/Button";
import { IoLockClosed, IoLockOpen } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import AuthContext from "@/store/auth-context";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email Address").required(),
  password: Yup.string().min(5, "Must be 5 character or long").required(),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, closeAuth } = useContext(AuthContext);
  const { mutate, isPending, error, isError, data } = useMutation({
    mutationFn: (userData: { email: string; password: string }) => {
      return axios.post(
        process.env.NEXT_PUBLIC_BACKEND_API + "/api/auth/login",
        userData,
      );
    },
    mutationKey: ["auth"],
    onSuccess: ({ data }) => {
      console.log(data);
      login(data.user);
      closeAuth();
    },
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      mutate(values);
    },
  });

  const toggleShowPassword = () => {
    setShowPassword((prv) => !prv);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="relative my-4 ">
        <input
          disabled={isPending}
          className="peer relative z-20 w-full border-none bg-transparent px-3 py-2 outline-none ring-1 ring-gray-200 focus:ring-primary"
          type="text"
          id="email"
          placeholder=""
          {...formik.getFieldProps("email")}
        />
        <label
          className="absolute -top-3 left-2 z-30 cursor-text  bg-white px-2 text-sm text-gray-500 transition-all  peer-placeholder-shown:left-2  peer-placeholder-shown:top-2 peer-placeholder-shown:z-10  peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:z-30 peer-focus:bg-white"
          htmlFor="email"
        >
          Email*
        </label>
        {formik.touched.email && formik.errors.email ? (
          <div className="my-1 text-sm capitalize text-red-600">
            <span className="flex items-center gap-2">
              <BiError />
              {formik.errors.email}
            </span>
          </div>
        ) : null}
      </div>
      <div className="relative my-4">
        <input
          className="peer relative z-20 w-full border-none bg-transparent px-3 py-2 outline-none ring-1 ring-gray-200 focus:ring-primary"
          type={showPassword ? "text" : "password"}
          id="password"
          maxLength={20}
          disabled={isPending}
          placeholder=""
          {...formik.getFieldProps("password")}
        />
        <label
          className="absolute -top-3 left-2 z-30 cursor-text  bg-white px-2 text-sm text-gray-500 transition-all  peer-placeholder-shown:left-2  peer-placeholder-shown:top-2 peer-placeholder-shown:z-10  peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:z-30 peer-focus:bg-white"
          htmlFor="password"
        >
          Password
        </label>
        {formik.touched.password && formik.errors.password ? (
          <div className="my-1 text-sm capitalize text-red-600">
            <span className="flex items-center gap-2">
              <BiError />
              {formik.errors.password}
            </span>
          </div>
        ) : null}

        <span
          onClick={toggleShowPassword}
          className="absolute right-3 top-3 z-30 cursor-pointer text-gray-500 hover:text-primary peer-focus:text-primary"
        >
          {showPassword ? <IoLockOpen /> : <IoLockClosed />}
        </span>
      </div>
      {isError && (
        <div className="my-2 flex items-center gap-2 text-sm text-red-600">
          <BiError />
          {error.message}
        </div>
      )}
      <Button
        disabled={isPending}
        className="w-full py-3"
        type="submit"
        size="lg"
        loading={isPending}
      >
        Login
      </Button>
    </form>
  );
};

export default Login;
