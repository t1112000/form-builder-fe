import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { AuthAtom } from "@/services/auth";
import { CommonAtom } from "@/services/common";
import { Form, FormApi } from "@/services/form";
import Icon from "../../Icon";
import { Button } from "../../ui/button";

import styles from "./FormItem.module.scss";

interface FormItemProps {
  form: Form;
}

const FormItem: React.FC<FormItemProps> = ({ form }) => {
  const currentUser = useRecoilValue(AuthAtom.currentUser);
  const setConfirmModal = useSetRecoilState(CommonAtom.confirmModal);

  const handleRemove = async () => {
    await FormApi.removeFormRecentByUserId(currentUser.id);
  };

  return (
    <div className={styles.form_item}>
      <Icon icon="box" size={36} color="#5c6169" />

      <div className={styles.info}>
        <p className={styles.name}>{form.name}</p>
        <p className={styles.description}>{form.description}</p>
      </div>

      <Button
        variant="destructive"
        className={styles.button}
        onClick={() =>
          setConfirmModal({
            open: true,
            title: "Are you sure you want to delete this recent form?",
            description: "This action cannot be undone.",
            onSubmit: handleRemove,
          })
        }
      >
        <Icon icon="trash" />
      </Button>
    </div>
  );
};

export default FormItem;
