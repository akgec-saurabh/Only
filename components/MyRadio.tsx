import { useField } from "formik";
import React from "react";

const MyRadio = ({ props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <input type="radio" />
      <label htmlFor={props.id || props.name}>{label}</label>
    </div>
  );
};

export default MyRadio;
