"use client";

import PRCheckbox from "@/app/common/components/PrimeReact/Inputs/PRCheckbox";
import PRInputText from "@/app/common/components/PrimeReact/Inputs/PRInputText";
import { useFormik } from "formik";
import Link from "next/link";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import type { JSX } from "react";
import { boolean, object, ref, string } from "yup";

const RegisterPage = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
    validationSchema: object({
      fullName: string()
        .required("Full Name is required")
        .min(4, "Full Name must be at least 4 characters"),
      email: string()
        .email("Invalid email address")
        .required("Email is required"),
      password: string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: string()
        .oneOf([ref("password"), undefined], "Passwords must match")
        .required("Confirm Password is required"),
      agreeToTerms: boolean().oneOf([true], "You must agree to the terms"),
    }),
    onSubmit: (values) => {
      console.log("Register form submitted", values);
    },
  });

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-lg rounded-lg bg-zinc-800 px-6 py-0 text-zinc-200 shadow-lg">
        <h2 className="text-2xl font-bold">Create a new account</h2>
        <form className="my-10" onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <PRInputText
              id="fullName"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Full Name"
              error={formik.touched.fullName && !!formik.errors.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-sm text-red-400">
                {formik.errors.fullName}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <PRInputText
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
              error={formik.touched.email && !!formik.errors.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-sm text-red-400">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <PRInputText
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
              type="password"
              error={formik.touched.password && !!formik.errors.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-sm text-red-400">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <PRInputText
              id="confirmPassword"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Confirm Password"
              type="password"
              error={
                formik.touched.confirmPassword &&
                !!formik.errors.confirmPassword
              }
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-sm text-red-400">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <PRCheckbox
              inputId="agreeToTerms"
              name="agreeToTerms"
              checked={formik.values.agreeToTerms}
              onChange={formik.handleChange}
              label="I agree to the terms"
              error={
                formik.touched.agreeToTerms && !!formik.errors.agreeToTerms
              }
            />
          </div>
          <Button
            type="submit"
            label="Register"
            className="mt-2 w-full rounded-lg bg-primary/70 py-2 text-white hover:bg-primary"
          />
        </form>
        <div className="text-center text-sm text-zinc-300">
          <Link href="/login">Already have an account? Log in here.</Link>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;
