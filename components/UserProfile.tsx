"use client";
import AuthContext from "@/store/auth-context";
import React, { useContext, useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

import MyInput from "./MyInput";
import { Form, Formik } from "formik";
import { PiChecks } from "react-icons/pi";
import { BiCopy } from "react-icons/bi";

const UserProfile = () => {
  const [copy, setCopy] = useState(false);
  const editMode = false;
  const { user } = useContext(AuthContext);
  let timeoutId: number;

  return (
    <div className="truncate p-4">
      <Formik
        initialValues={{
          firstName: user.name.firstName,
          lastName: user.name.lastName,
          email: user.email,
        }}
        validationSchema={{}}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        <Form className="space-y-4">
          <div className="flex gap-4">
            <MyInput
              label="First Name"
              name="firstName"
              disabled={!editMode}
              className="bg-gray-100"
            />
            <MyInput
              label="Last Name"
              name="lastName"
              disabled={!editMode}
              className="bg-gray-100"
            />
          </div>
          <MyInput
            label="Email"
            disabled={!editMode}
            name="email"
            className="bg-gray-100"
          />
          <div className="max-w-lg text-wrap break-words border">
            <div className="flex items-center justify-between border-b">
              <span className="px-4">Token</span>
              <Button
                className=""
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(user.token);
                  setCopy(true);
                  clearTimeout(timeoutId);
                  timeoutId = window.setTimeout(() => {
                    setCopy(false);
                  }, 2000);
                }}
              >
                {copy ? <PiChecks size={20} /> : <BiCopy size={20} />}
              </Button>
            </div>
            <p className="bg-gray-100 px-4 py-2">{user.token}</p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UserProfile;
