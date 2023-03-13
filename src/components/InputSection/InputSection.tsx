import React, { FC } from 'react';
import { Input, InputSectionContainer, Label } from './styled';

import { InputSectionProps } from './types';

export const InputSection: FC<InputSectionProps> = ({ type, label, value, name, isDark, onChange }) => {
  const id = `inputSection_${name}`;

  return (
    <InputSectionContainer>
      <Label isDark={isDark} htmlFor={id}>
        {label}
      </Label>
      <Input isDark={isDark} type={type} value={value} name={name} id={id} onChange={onChange} required />
    </InputSectionContainer>
  );
};
