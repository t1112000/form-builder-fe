"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import AppScreens from "@/types/router.type";
import { forgotPasswordValidate } from "@/utils/validate";

import styles from "./ForgotPassword.module.scss";

const ForgotPassword: React.FC = () => {
  const [isSent, setIsSent] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: forgotPasswordValidate,
    onSubmit: (values) => {
      console.log(values);
      setTimeout(() => {
        toast({
          description:
            "Please check your email, we sent a link to reset your password to your email",
        });
        setIsSent(true);
        formik.setSubmitting(false);
      }, 2000);
    },
  });

  return (
    <main className={styles.forgot_password}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <h1 className={styles.title}>Forgot Password</h1>

        {isSent ? (
          <React.Fragment>
            <p className={styles.text}>
              Please check your email, we sent a link to reset your password to
              your email
            </p>

            <Button
              variant="outline"
              onClick={() => router.push(AppScreens.SIGN_IN)}
              icon="arrow-left"
            >
              Back to sign in
            </Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Input
              label="Email"
              placeholder="Enter email"
              {...formik.getFieldProps("email")}
              errorMessage={
                formik.touched.email ? formik.errors.email : undefined
              }
            />

            <Button
              type="submit"
              disabled={!formik.dirty || formik.isSubmitting}
              loading={formik.isSubmitting}
            >
              Send link
            </Button>
          </React.Fragment>
        )}
      </form>
    </main>
  );
};

export default ForgotPassword;
