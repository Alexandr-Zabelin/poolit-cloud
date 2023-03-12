import React, { FC } from 'react';
import { Input, InputSectionContainer, Label } from './styled';

import { InputSectionProps } from './types';

export const InputSection: FC<InputSectionProps> = ({ type, label, value, name, onChange }) => {
  const id = `inputSection_${name}`;

  return (
    <InputSectionContainer>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} value={value} name={name} id={id} onChange={onChange} required />
    </InputSectionContainer>
  );
};
