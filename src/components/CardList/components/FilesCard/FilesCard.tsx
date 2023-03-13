import React, { FC, useCallback } from 'react';
import Button from '@mui/material/Button';

import { CardListType } from '../../types';
import { FilesCardProps } from './types';
import { CardConatiner, FileName } from './styled';

export const FilesCard: FC<FilesCardProps> = ({ data, onCardClick }) => {
  const { name } = data;

  const onClick = useCallback(() => onCardClick?.({ type: CardListType.files, data }), [data]);

  return (
    <CardConatiner>
      <FileName>{name}</FileName>
      <Button disabled={!onCardClick} onClick={onClick}>
        Открыть
      </Button>
    </CardConatiner>
  );
};
