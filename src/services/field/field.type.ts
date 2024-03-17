export enum FieldTypes {
  PARAGRAPH = "PARAGRAPH",
  DATE = "DATE",
  TIME = "TIME",
  CHECKBOX = "CHECKBOX",
  RADIO = "RADIO",
  DROPDOWN = "DROPDOWN",
  DATE_TIME = "DATE_TIME",
  UPLOAD = "UPLOAD",
}

export interface Field {
  id: string;
  type: FieldTypes;
  name: string;
  options?: string[];
}
