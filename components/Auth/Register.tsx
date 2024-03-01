import React, { useContext, useState } from "react";

import { Form, Formik, useFormik } from "formik";

import * as Yup from "yup";
import { BiError } from "react-icons/bi";
import Button from "@/components/Button";
import { IoLockClosed, IoLockOpen } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import AuthContext from "@/store/auth-context";
import MyInput from "../MyInput";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email Address").required(),
  password: Yup.string().min(5, "Must be 5 character or long").required(),
  firstName: Yup.string().min(5, "Must be 5 character long").required(),
  lastName: Yup.string().min(5, "Must be 5 character long").required(),
});

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, closeAuth } = useContext(AuthContext);
  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: (userData: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    }) => {
      return axios.post(
        process.env.NEXT_PUBLIC_BACKEND_API + "/api/auth/register",
        userData,
      );
    },
    onSuccess: ({ data }) => {
      // todo: dont login sending verfication email
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        mutate(values);
      }}
    >
      <Form className="space-y-4">
        <div className="my-4 flex gap-4">
          <MyInput name="firstName" label="First Name" disabled={isPending} />
          <MyInput name="lastName" label="Last Name" disabled={isPending} />
        </div>
        <MyInput name="email" label="Email" disabled={isPending} />
        <div className="relative">
          <MyInput
            name="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            maxLength={20}
            disabled={isPending}
          />
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
          Register
        </Button>
      </Form>
    </Formik>
  );
};

export default Register;
