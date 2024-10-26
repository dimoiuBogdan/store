"use client";

import PRInputText from "@/app/common/components/PrimeReact/Inputs/PRInputText";
import PRInputTextarea from "@/app/common/components/PrimeReact/Inputs/PRInputTextarea";
import PRDropdown from "@/app/common/components/PrimeReact/PRDropdown";
import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import React from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const subjects = [
  { label: "Order Issue", value: "order" },
  { label: "Product Info", value: "product" },
  { label: "Shipping Question", value: "shipping" },
  { label: "Other", value: "other" },
];

const ContactForm: React.FC = () => {
  return (
    <section id="contact-form" className="mb-12">
      <h2 className="mb-6 text-3xl font-semibold">Contact Us</h2>
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          // Handle form submission
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="rounded-lg bg-zinc-800 p-6 text-zinc-200 shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="mb-2 block text-zinc-200">
                Name
              </label>
              <PRInputText
                id="name"
                name="name"
                error={!!errors.name && touched.name}
              />
              {errors.name && touched.name && (
                <small className="p-error">{errors.name}</small>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block text-zinc-200">
                Email
              </label>
              <PRInputText
                id="email"
                name="email"
                error={!!errors.email && touched.email}
              />
              {errors.email && touched.email && (
                <small className="p-error">{errors.email}</small>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="mb-2 block text-zinc-200">
                Subject
              </label>
              <PRDropdown id="subject" name="subject" options={subjects} />
              {errors.subject && touched.subject && (
                <small className="p-error">{errors.subject}</small>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="mb-2 block text-zinc-200">
                Message
              </label>
              <PRInputTextarea
                id="message"
                name="message"
                rows={5}
                error={!!errors.message && touched.message}
              />
              {errors.message && touched.message && (
                <small className="p-error">{errors.message}</small>
              )}
            </div>

            <Button
              type="submit"
              label="Send Message"
              className="w-full"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
