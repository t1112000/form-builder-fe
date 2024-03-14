"use client";
import Colors from "@/constants/colors";
import NextNProgress from "nextjs-progressbar";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

const ComponentWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <RecoilRoot>
      <NextNProgress color={Colors.BLACK} height={5} />
      <RecoilNexus />
      {children}
    </RecoilRoot>
  );
};

export default ComponentWrapper;
