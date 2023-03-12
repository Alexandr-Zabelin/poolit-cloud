import { AuthRequestData, AuthType } from './Form';

export interface AuthSectionProps {
  initAuthType: AuthType;
  onSubmitClick: (data: AuthRequestData) => void;
  className?: string;
}
