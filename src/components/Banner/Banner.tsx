import React, { FC } from 'react';

import { Button } from '@components/Button';

import { BannerContainer, Title } from './styled';
import { BannerProps } from './types';

export const Banner: FC<BannerProps> = ({ data, onButtonClick, className }) => {
  const { title, buttonTitle } = data;

  return (
    <BannerContainer className={className}>
      <Title>{title}</Title>
      <Button title={buttonTitle} onButtonClick={onButtonClick} />
    </BannerContainer>
  );
};
