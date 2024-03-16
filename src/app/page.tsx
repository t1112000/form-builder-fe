"use client";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { LocalKeys } from "@/services/storage";
import AppScreens from "@/types/router.type";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem(LocalKeys.AUTH_TOKEN);

    if (!token) {
      router.push(AppScreens.SIGN_IN);
    }
  }, [router]);

  return (
    <main
      className={classNames(
        "flex min-h-screen flex-col items-center justify-center p-24 bg-black text-9xl font-bold text-white"
      )}
    >
      HOME PAGE
    </main>
  );
}
