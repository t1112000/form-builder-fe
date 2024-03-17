import { GetFormParams, GetFormResponse } from ".";
import Api from "..";
import formEvent from "./form.event";

const getList = async (params: GetFormParams) => {
  const initialValues = {
    data: [],
    total: 0,
  };

  try {
    const res = await Api<GetFormResponse>({
      url: "/v1/forms",
      method: "GET",
      params,
    });

    if (res.data.statusCode === 200) {
      formEvent.emitReloadFormRecent();
      return res.data;
    }

    return initialValues;
  } catch (error) {
    return initialValues;
  }
};

const checkFormExist = async (formId: string) => {
  try {
    const res = await Api<CommonResponse>({
      url: `/v1/forms/${formId}/check`,
      method: "GET",
    });

    if (res.data.statusCode === 200) {
      return true;
    }

    return undefined;
  } catch (error) {
    return undefined;
  }
};

const removeFormRecentByUserId = async (user_id: string) => {
  try {
    const res = await Api<CommonResponse>({
      url: `/v1/user/form-recents/${user_id}`,
      method: "DELETE",
    });

    if (res.data.statusCode === 200) {
      formEvent.emitReloadFormRecent();
      return res.data;
    }

    return undefined;
  } catch (error) {
    return undefined;
  }
};

const FormApi = { getList, checkFormExist, removeFormRecentByUserId };

export default FormApi;
