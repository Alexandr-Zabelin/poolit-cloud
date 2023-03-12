export type AuthType = 'login' | 'registration';

export interface AuthRequestData {
  authType: AuthType;
  userName: string;
  password: string;
}

export interface FormProps {
  authType: AuthType;
  onSubmitClick: (data: AuthRequestData) => void;
}
