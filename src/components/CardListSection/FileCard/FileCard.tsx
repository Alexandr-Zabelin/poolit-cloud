import React, { FC, useCallback } from 'react';

import { Description, DownloadButton, Name, NameAndSizeContainer, Size, TextDate } from './styled';
import { FileCardProps } from './types';

export const FileCard: FC<FileCardProps> = ({ data }) => {
  const { name, poolitKey, description, size, creationDate } = data;

  const textDate = creationDate?.split(' ')?.[0];
  const KbSize = size ? Math.round(size / 1000) : 0;

  const onButtonClick = useCallback(() => {
    console.log(poolitKey);
  }, [poolitKey]);

  return (
    <>
      <NameAndSizeContainer>
        <Name>{name}</Name>
        {!!KbSize && <Size>{KbSize} KB</Size>}
      </NameAndSizeContainer>
      {!!description && <Description>{description}</Description>}
      {!!textDate && <TextDate>{`Created ${textDate}`}</TextDate>}
      <DownloadButton title="Скачать" isBgColorPrimary onButtonClick={onButtonClick} />
    </>
  );
};
