"use client";
import { useFormik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import AppScreens from "@/types/router.type";
import { resetPasswordValidate } from "@/utils/validate";

import styles from "./ResetPassword.module.scss";

const ResetPassword: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [isResetPassword, setIsResetPassword] = useState(false);

  console.log({ token });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_password: "",
    },
    validate: resetPasswordValidate,
    onSubmit: (values) => {
      console.log(values);
      setTimeout(() => {
        toast({
          description: "Password reset successfully",
        });
        formik.setSubmitting(false);
        setIsResetPassword(true);
      }, 2000);
    },
  });

  return (
    <main className={styles.reset_password}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <h1 className={styles.title}>Reset Password</h1>

        {isResetPassword ? (
          <React.Fragment>
            <p className={styles.text}>
              Your password has been reset successfully.
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
              label="Password"
              type="password"
              placeholder="Enter password"
              {...formik.getFieldProps("password")}
              errorMessage={
                formik.touched.password ? formik.errors.password : undefined
              }
            />

            <Input
              label="Confirm password"
              type="password"
              placeholder="Enter password"
              {...formik.getFieldProps("confirm_password")}
              errorMessage={
                formik.touched.confirm_password
                  ? formik.errors.confirm_password
                  : undefined
              }
            />

            <Button
              type="submit"
              disabled={!formik.dirty || formik.isSubmitting}
              loading={formik.isSubmitting}
            >
              Reset password
            </Button>
          </React.Fragment>
        )}
      </form>
    </main>
  );
};

const ResetPasswordWrapper = () => {
  return (
    <Suspense>
      <ResetPassword />
    </Suspense>
  );
};

export default ResetPasswordWrapper;
