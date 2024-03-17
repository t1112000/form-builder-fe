import React from "react";

import Icon from "../Icon";

import styles from "./Empty.module.scss";

interface EmptyProps {
  text?: string;
}

const Empty: React.FC<EmptyProps> = ({ text = "No data" }) => {
  return (
    <div className={styles.empty}>
      <Icon icon="box" size={80} color="#5c6169" />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Empty;
