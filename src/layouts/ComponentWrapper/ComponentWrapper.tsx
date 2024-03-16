"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NextNProgress from "nextjs-progressbar";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

import Colors from "@/constants/colors";

const ComponentWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <RecoilRoot>
        <NextNProgress color={Colors.BLACK} height={5} />
        <RecoilNexus />
        {children}
      </RecoilRoot>
    </GoogleOAuthProvider>
  );
};

export default ComponentWrapper;
