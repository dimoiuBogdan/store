"use client";

import PRCheckbox from "@/app/common/components/PrimeReact/Inputs/PRCheckbox";
import PRInputText from "@/app/common/components/PrimeReact/Inputs/PRInputText";
import { useFormik } from "formik";
import Link from "next/link";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import * as Yup from "yup";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Login form submitted", values);
    },
  });

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-lg rounded-lg bg-zinc-800 px-6 py-0 text-zinc-200 shadow-lg">
        <h2 className="text-2xl font-bold">Login to your account</h2>
        <form className="my-10" onSubmit={formik.handleSubmit}>
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
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
              error={formik.touched.password && !!formik.errors.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-sm text-red-400">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="mb-4 flex items-center">
            <PRCheckbox
              inputId="rememberMe"
              name="rememberMe"
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}
              label="Remember me"
            />
          </div>
          <Button
            type="submit"
            label="Login"
            className="mt-2 w-full rounded-lg bg-primary/70 py-2 text-white hover:bg-primary"
          />
        </form>
        <div className="text-center text-sm text-zinc-300">
          <Link href="/register">Don’t have an account? Register here.</Link>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
