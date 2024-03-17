import { SignInMethods } from "../auth";

export interface User {
  id: string;
  email: string;
  name: string;
  phone_number?: string;
  type: SignInMethods;
}
