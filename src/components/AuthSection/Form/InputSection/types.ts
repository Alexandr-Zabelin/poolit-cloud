import { ChangeEvent } from 'react';

export interface InputSectionProps {
  label: string;
  type: 'text' | 'password';
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
