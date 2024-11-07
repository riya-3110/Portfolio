import React from "react";
import "./Contact.scss";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Contact = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid Email format"),
    contact: Yup.string()
      .required("Contact number is required")
      .matches(/^[0-9]{10}$/, "Contact number is must be exactly 10 digits"),
    comment: Yup.string().required("Comment is required"),
  });

  return (
    <div className="contact" id="contact">
      <Formik
        initialValues={{ email: "", contact: "", comment: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Values ::", values);
          localStorage.setItem("WebsiteData", JSON.stringify(values));
          alert("Your message send successfully....");
          setSubmitting(false);
        }}
      >
        {(onSubmitting) => (
          <Form className="upper-container">
            <h3>Contact Me</h3>
            <Field name="email" type="text" placeholder="Enter Email" />
            <ErrorMessage name="email" component="div" className="errorMsg" />
            <Field
              name="contact"
              type="text"
              placeholder="Enter Contact number"
            />
            <ErrorMessage name="contact" component="div" className="errorMsg" />
            <Field
              name="comment"
              as="textarea"
              placeholder="Comments"
              rows="5"
            />
            <ErrorMessage name="comment" component="div" className="errorMsg" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <div className="lower-container">
        <h1>Get in touch</h1>
        <div className="social-icons">
          <BsGithub className="icon" />
          <BsLinkedin className="icon" />
          <BsTwitter className="icon" />
        </div>
      </div>
    </div>
  );
};
