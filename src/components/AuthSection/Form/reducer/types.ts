interface FormActionData {
  data: string;
}

export enum FormActions {
  SET_LOGIN = 'SET_LOGIN',
  SET_PASSWORD = 'SET_PASSWORD',
}

export interface FormState {
  login: string;
  password: string;
}

export type FormAction =
  | GenericAction<FormActions.SET_LOGIN, FormActionData>
  | GenericAction<FormActions.SET_PASSWORD, FormActionData>;
