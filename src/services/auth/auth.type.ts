export enum SignInMethods {
  LOCAL = "LOCAL",
  GOOGLE = "GOOGLE",
}

export interface SignInResponse extends CommonResponse {
  token: string;
}

export interface SignInPayload {
  data: {
    username?: string;
    password?: string;
    tokenId?: string;
  };
  method: SignInMethods;
}
