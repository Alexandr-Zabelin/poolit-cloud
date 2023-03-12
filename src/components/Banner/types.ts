interface BannerData {
  title: string;
  buttonTitle: string;
}

export interface BannerProps {
  data: BannerData;
  onButtonClick?: () => void;
  className?: string;
}
