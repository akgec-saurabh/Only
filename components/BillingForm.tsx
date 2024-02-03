"use client";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import * as Yup from "yup";
import MyInput from "./MyInput";
import MySelect from "./MySelect";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  //   state: string;
  //   city: string;
  address: string;
  pincode: string;
  //   orderNote: string;
}

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  //   state: "",
  //   city: "",
  address: "",
  pincode: "",
  //   orderNote: "",
};

const BillingForm = () => {
  return (
    <div>
      <h4 className="text-xl uppercase font-medium pt-10 pb-5">
        Billing Details
      </h4>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),

          email: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),

          phone: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),

          country: Yup.string().required("Required"),
        })}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          console.log(values);
        }}
      >
        <Form className="p-4 space-y-4">
          <div className="flex gap-4">
            <MyInput label="First Name *" name="firstName" />
            <MyInput label="Last Name" name="lastName" />
          </div>
          <MyInput label="Email *" name="email" />
          <MyInput label="Phone *" name="phone" />
          <MySelect label="Country" name="country" as="select" />
          <MyInput label="Address *" name="address" />
          <MyInput label="Pincode *" name="pincode" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default BillingForm;
