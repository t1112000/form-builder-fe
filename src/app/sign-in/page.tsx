"use client";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";

import GoogleButton from "@/components/GoogleButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import AppScreens from "@/types/router.type";
import { signInValidate } from "@/utils/validate";

import styles from "./SignIn.module.scss";

const SignIn: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: signInValidate,
    onSubmit: (values) => {
      console.log(values);
      setTimeout(() => {
        toast({
          description: "Sign in successfully",
        });
        formik.setSubmitting(false);
      }, 2000);
    },
  });

  return (
    <main className={styles.sign_in}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <h1 className={styles.title}>Sign In</h1>

        <div className="flex flex-col gap-y-2">
          <Input
            label="Email"
            placeholder="Enter email"
            {...formik.getFieldProps("email")}
            errorMessage={
              formik.touched.email ? formik.errors.email : undefined
            }
          />

          <Input
            label="Password"
            placeholder="Enter password"
            type="password"
            {...formik.getFieldProps("password")}
            errorMessage={
              formik.touched.password ? formik.errors.password : undefined
            }
          />

          <Link
            href={AppScreens.FORGOT_PASSWORD}
            className={styles.forgot_password}
          >
            Forgot password?
          </Link>
        </div>

        <div className="flex flex-col gap-y-2">
          <Button
            type="submit"
            disabled={!formik.dirty || formik.isSubmitting}
            loading={formik.isSubmitting}
          >
            Sign in
          </Button>

          <p className={styles.or}>or</p>

          <GoogleButton text="Sign in with Google" />

          <p className={styles.dont_have_an_account}>
            Don&apos;t have an account?{" "}
            <Link className={styles.link} href={AppScreens.SIGN_UP}>
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default SignIn;
