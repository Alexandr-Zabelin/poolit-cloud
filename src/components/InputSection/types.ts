import { ChangeEvent } from 'react';

export interface InputSectionProps {
  label: string;
  type: 'text' | 'password' | 'file';
  value: string;
  name: string;
  isDark?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
