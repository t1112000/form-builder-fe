import { Field } from "../field";

export interface Form {
  id: string;
  name: string;
  description: string;
  settings: FormSetting;
  results: FormResult[];
  user_id: string;
  fields: Field[];
  created_at: string;
}

export interface FormSetting {
  id: string;
  is_open: boolean;
  is_send_mail: boolean;
  expiration_date?: string;
}

export interface FormResult {
  id: string;
  user_id: string;
  result_items: ResultItem[];
}

export interface ResultItem {
  id: string;
  field_id: string;
  value: string;
}

export interface GetFormParams {
  user_id?: string;
  page?: number;
  limit?: number;
}

export interface GetFormResponse extends CommonResponse {
  data: Form[];
  total: number;
}
