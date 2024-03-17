"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import NextNProgress from "nextjs-progressbar";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

import ConfirmModal from "@/components/Modals/ConfirmModal";
import Colors from "@/constants/colors";
import AppScreens from "@/types/router.type";
import Header from "../Header";

import styles from "./ComponentWrapper.module.scss";

const AUTH_PATHNAME = [
  AppScreens.SIGN_IN,
  AppScreens.SIGN_UP,
  AppScreens.FORGOT_PASSWORD,
  AppScreens.RESET_PASSWORD,
];

const ComponentWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const isAuth = !AUTH_PATHNAME.includes(pathname);

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <RecoilRoot>
        <NextNProgress color={Colors.BLACK} height={5} />
        <RecoilNexus />

        <main className={styles.component_wrapper}>
          <div
            className={classNames(styles.wrapper, {
              [styles.auth]: isAuth,
            })}
          >
            {isAuth && <Header />}
            <div className={styles.children}>{children}</div>
          </div>
        </main>

        <ConfirmModal />
      </RecoilRoot>
    </GoogleOAuthProvider>
  );
};

export default ComponentWrapper;
