"use client";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import MyInput from "./MyInput";
import MySelect from "./MySelect";
import Button from "./Button";
import Payment from "./Payment";
import Link from "next/link";
import CartTotal from "./CartTotal";
import CartContext from "@/store/cart-context";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import AuthContext from "@/store/auth-context";
import { useRouter } from "next/navigation";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
  city: string;
  address: string;
  pincode: string;
  payment: string;
}

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  state: "",
  city: "",
  address: "",
  pincode: "",
  payment: "Cash",
};

const BillingForm = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const { mutate } = useMutation({
    mutationKey: ["payment"],
    mutationFn: (value: Values) => {
      return axios.post(
        process.env.NEXT_PUBLIC_BACKEND_API + "/api/payment/",
        value,
        { headers: { Authorization: `Bearer ${user.token}` } },
      );
    },
    onSuccess: ({ data }) => {
      console.log(data);
      router.push(data.url);
    },
  });

  const { cart } = useContext(CartContext);
  return (
    <div className="flex-[4]">
      <h4 className="pb-5 pt-10 text-xl font-medium uppercase">
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
            .min(5, "Must be 5 characters or more")
            .required("Required"),

          phone: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),

          state: Yup.string().required("Required"),
          city: Yup.string().required("Required"),
          address: Yup.string().required("Required"),
          pincode: Yup.string().required("Required"),
          // payment: Yup.string().required("Required"),
        })}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>,
        ) => {
          mutate(values);
        }}
      >
        <Form className=" flex flex-col gap-16 py-4 xl:flex-row">
          <div className="space-y-4  xl:flex-[3] 2xl:flex-[4]">
            <div className="flex justify-between gap-4 ">
              <MyInput label="First Name *" name="firstName" />
              <MyInput label="Last Name" name="lastName" />
            </div>
            <MyInput label="Email *" name="email" />
            <MyInput label="Phone *" name="phone" />
            <MySelect label="State" name="state" as="select" />
            <MyInput label="City *" name="city" />
            <MyInput label="Address *" name="address" />
            <MyInput label="Pincode *" name="pincode" />
          </div>
          <div className="space-y-8  xl:flex-[2] 2xl:flex-[2]">
            <CartTotal cart={cart} />
            <div className="space-y-4 border p-10 text-primary">
              <div>
                <label className="my-3">
                  <div className="flex items-center gap-2">
                    <Field
                      className="accent-primary"
                      type="radio"
                      name="payment"
                      value="Cash"
                    />
                    <div>Cash</div>
                  </div>
                  <div className="my-1 pl-5 text-sm leading-5">
                    Pay with cash upon delivery. No need for upfront payment.
                    Simply pay when your order arrives.
                    <div>
                      Convenient and secure cash payment option available.
                    </div>
                  </div>
                </label>
              </div>
              <div>
                <label>
                  <div className="flex items-center gap-2">
                    <Field
                      className="accent-primary"
                      type="radio"
                      name="payment"
                      value="Online"
                    />
                    <div>Online</div>
                  </div>
                  <div className="my-1 pl-5 text-sm leading-5">
                    Securely pay online with ease. Quick and hassle-free payment
                    process. Your payment details are encrypted for enhanced
                    security.
                  </div>
                </label>
              </div>
              <div className="my-2 text-xs">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
                <Link className="text-rose-700 hover:underline" href="">
                  privacy policy.
                </Link>
              </div>
            </div>
            <Button size="lg" className="my-4 w-full" type="submit">
              Place Order
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default BillingForm;
