import axios, { AxiosRequestHeaders } from "axios";
import { get } from "lodash";
import { LocalKeys } from "./storage";

const Api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
});

Api.interceptors.request.use((config) => {
  if (!config.headers) {
    return config;
  }

  if (typeof window !== "undefined") {
    let token = localStorage.getItem(LocalKeys.AUTH_TOKEN);
    if (token) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        } as AxiosRequestHeaders,
      };
    } else {
      return config;
    }
  } else {
    return config;
  }
});

Api.interceptors.response.use(
  (res: any) => {
    return res;
  },
  (error: any) => {
    const err =
      get(error, "response.data.error.message") ||
      get(error, "response.data.message") ||
      "Unknown error";
    return Promise.reject(new Error(typeof err === "string" ? err : err?.[0]));
  }
);

export default Api;
