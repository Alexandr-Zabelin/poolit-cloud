import React, { FC } from 'react';

import { PageLayout } from '@components/PageLayout';
import { Search } from '@components/Search';
import { CardListData, CardListType } from '@components/CardList/types';
import { CardListSection } from '@components/CardListSection';

const MOCK_DATA: CardListData = {
  type: CardListType.files,
  data: {
    cards: [
      {
        name: 'Person1',
        id: '1',
        poolitKey: '1',
        creationDate: '2023-03-13 14:37:48.600000 +00:00',
        size: 12648494,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: 'Person1',
        id: '1',
        poolitKey: '1',
      },
      {
        name: 'Person1',
        id: '1',
        poolitKey: '1',
      },
      {
        name: 'Person1',
        id: '1',
        poolitKey: '1',
      },
      {
        name: 'Person1ssssdddjdjdjdjdjj',
        id: '1',
        poolitKey: '1',
      },
    ],
  },
};

export const Files: FC = () => {
  return (
    <PageLayout title="Файлы">
      <Search />
      <CardListSection listData={MOCK_DATA} />
    </PageLayout>
  );
};
