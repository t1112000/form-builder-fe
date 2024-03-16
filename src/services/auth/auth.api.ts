import { SignInPayload, SignInResponse } from ".";
import Api from "..";

const signIn = async (data: SignInPayload) => {
  try {
    const res = await Api<SignInResponse>({
      url: "/v1/sign-in",
      method: "POST",
      data,
    });

    if (res.data.statusCode === 200) {
      return res.data;
    }

    return undefined;
  } catch (error) {
    return undefined;
  }
};

const signUp = async (data: SignInPayload) => {
  try {
    const res = await Api<SignInResponse>({
      url: "/v1/sign-up",
      method: "POST",
      data,
    });

    if (res.data.statusCode === 200) {
      return res.data;
    }

    return undefined;
  } catch (error) {
    return undefined;
  }
};

const AuthApi = { signIn, signUp };

export default AuthApi;
