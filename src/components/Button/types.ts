export interface ButtonProps {
  title: string;
  isBgColorPrimary?: boolean;
  onButtonClick?: () => void;
  type?: 'submit' | 'button';
  className?: string;
}
