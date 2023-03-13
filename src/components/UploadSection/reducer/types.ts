interface FormActionData {
  data: string;
}

interface FormActionFileData {
  data: File;
}

export interface FormState {
  name: string;
  description?: string;
  fileForm?: File;
}

export enum FormActions {
  SET_NAME = 'SET_NAME',
  SET_DESCRIPTION = 'SET_DESCRIPTION',
  SET_FILE = 'SET_FILE',
}

export type FormAction =
  | GenericAction<FormActions.SET_NAME, FormActionData>
  | GenericAction<FormActions.SET_FILE, FormActionFileData>
  | GenericAction<FormActions.SET_DESCRIPTION, FormActionData>;
