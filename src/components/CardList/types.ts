import { FilesCardData } from './components';

export type CardListData = GenericData<CardListType.files, { cards: FilesCardData[] }>;

export type OnCardClickArg = GenericData<CardListType.files, FilesCardData>;

export type OnCardClick = (card: OnCardClickArg) => void;

export enum CardListType {
  people = 'people',
  files = 'files',
}

export interface CardListProps {
  data: CardListData;
  onCardClick?: OnCardClick;
}
