import React, { FC } from 'react';

import { ButtonProps } from './types';
import { ButtonComponent } from './styled';

export const Button: FC<ButtonProps> = ({ title, isBgColorPrimary, onButtonClick, type, className }) => (
  <ButtonComponent isBgColorPrimary={isBgColorPrimary} onClick={onButtonClick} type={type} className={className}>
    {title}
  </ButtonComponent>
);
