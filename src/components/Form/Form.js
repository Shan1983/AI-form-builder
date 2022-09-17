import React from "react";
import FormHeader from "./FormHeader/FormHeader";
import "./Form.css";
import FormTabs from "./Tabs/Tabs";
import Builder from "./Builder/Builder";

const Form = () => {
  return (
    <div className="form">
      <FormHeader />
      <FormTabs />
      <Builder />
    </div>
  );
};

export default Form;
