import { atom } from "recoil";

interface ConfirmModal {
  open: boolean;
  title: string;
  description?: string;
  onSubmit?: () => Promise<void> | void;
}

const confirmModal = atom<ConfirmModal>({
  key: "confirmModal",
  default: {
    open: false,
    title: "",
  },
});

const CommonAtom = { confirmModal };

export default CommonAtom;
