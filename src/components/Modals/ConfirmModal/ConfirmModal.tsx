import React, { useState } from "react";
import ReactLoading from "react-loading";
import { useRecoilValue, useResetRecoilState } from "recoil";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CommonAtom } from "@/services/common";

const ConfirmModal: React.FC = () => {
  const confirmModal = useRecoilValue(CommonAtom.confirmModal);
  const resetConfirmModal = useResetRecoilState(CommonAtom.confirmModal);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    if (confirmModal?.onSubmit) {
      try {
        setLoading(true);
        await confirmModal?.onSubmit();
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <AlertDialog open={confirmModal.open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{confirmModal.title}</AlertDialogTitle>
          {confirmModal?.description && (
            <AlertDialogDescription>
              {confirmModal.description}
            </AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={resetConfirmModal}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            disabled={loading}
            className="flex items-center gap-x-2"
          >
            {loading && <ReactLoading type="spin" width={16} height={16} />}
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmModal;
