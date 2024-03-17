import { atom } from "recoil";

import { User } from "../user";

const currentUser = atom<User>({
  key: "currentUser",
  default: undefined,
});

const AuthAtom = { currentUser };

export default AuthAtom;
