import React, { FC } from 'react';

import { FilesCard } from './components';
import { CardListContainer } from './styled';
import { CardListProps, CardListType } from './types';

export const CardList: FC<CardListProps> = ({ data, onCardClick }) => {
  switch (data.type) {
    case CardListType.files: {
      return (
        <CardListContainer>
          {data.data.cards.map((cardData, idx) => (
            <FilesCard data={cardData} onCardClick={onCardClick} key={`filesCard_${idx}`} />
          ))}
        </CardListContainer>
      );
    }
    default: {
      return null;
    }
  }
};
