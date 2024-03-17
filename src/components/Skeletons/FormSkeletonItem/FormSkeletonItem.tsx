import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

import styles from "./FormSkeletonItem.module.scss";

const FormSkeletonItem: React.FC = () => {
  return (
    <div className={styles.form_skeleton_item}>
      <Skeleton className={styles.avatar} />

      <div className={styles.info}>
        <Skeleton className={styles.name} />
        <Skeleton className={styles.description} />
      </div>
    </div>
  );
};

export default FormSkeletonItem;
