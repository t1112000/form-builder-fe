"use client";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useSetRecoilState } from "recoil";

import GoogleButton from "@/components/GoogleButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthAtom, SignInMethods } from "@/services/auth";
import { LocalKeys } from "@/services/storage";
import AppScreens from "@/types/router.type";
import { signUpValidate } from "@/utils/validate";

import styles from "./SignUp.module.scss";

const SignUp: React.FC = () => {
  const setCurrentUser = useSetRecoilState(AuthAtom.currentUser);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    validate: signUpValidate,
    onSubmit: (values) => {
      setTimeout(() => {
        setCurrentUser({
          id: "1",
          name: "John Doe",
          email: values.email,
          type: SignInMethods.LOCAL,
        });
        localStorage.setItem(LocalKeys.AUTH_TOKEN, "token");
        router.push(AppScreens.HOME);
        formik.setSubmitting(false);
      }, 2000);
    },
  });

  return (
    <main className={styles.sign_up}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <h1 className={styles.title}>Sign Up</h1>

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
        </div>

        <div className="flex flex-col gap-y-2">
          <Button
            type="submit"
            disabled={!formik.dirty || formik.isSubmitting}
            loading={formik.isSubmitting}
          >
            Sign up
          </Button>

          <p className={styles.or}>or</p>

          <GoogleButton text="Sign up with Google" />

          <p className={styles.dont_have_an_account}>
            Already have an account?{" "}
            <Link className={styles.link} href={AppScreens.SIGN_IN}>
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default SignUp;
