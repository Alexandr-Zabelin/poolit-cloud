import { ReactNode } from 'react';

export interface LayoutProps {
  isLoading: boolean;
  error?: string | null;
  data?: unknown | null;
  children?: ReactNode;
}
