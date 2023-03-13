import { OnCardClick } from '../../types';

export interface FilesCardData {
  id: string;
  name: string;
  poolitKey: string;
  description?: string | null;
  creationDate?: string | null;
  size?: number | null;
}

export interface FilesCardProps {
  data: FilesCardData;
  onCardClick?: OnCardClick;
}
