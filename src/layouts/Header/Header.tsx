import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useRecoilValue } from "recoil";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AuthAtom } from "@/services/auth";
import AppScreens from "@/types/router.type";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const user = useRecoilValue(AuthAtom.currentUser);
  const router = useRouter();

  return (
    <header className={classNames(styles.header, "container")}>
      <div className={styles.logo}>
        <Image
          src="/favicon.ico"
          alt="logo"
          width={48}
          height={48}
          onClick={() => router.push(AppScreens.HOME)}
        />
      </div>

      <nav className={styles.nav}>
        <Link href={AppScreens.HOME} className={styles.nav_item}>
          Home
        </Link>
        <Link href={AppScreens.FORMS} className={styles.nav_item}>
          Form
        </Link>
      </nav>

      <div className={styles.user}>
        <Avatar className={styles.avatar}>
          <AvatarImage src="" />
          <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
        </Avatar>
        <p className={styles.email}>{user?.email}</p>
      </div>
    </header>
  );
};

export default Header;
