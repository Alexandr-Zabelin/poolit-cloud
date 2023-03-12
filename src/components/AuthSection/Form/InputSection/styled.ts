import css from '@styled-system/css';
import styled from 'styled-components';

import { colors, variants } from '@src/styled-config';

export const InputSectionContainer = styled('div')(
  css({
    '&:not(:first-child)': {
      mt: 56,
    },
  }),
);

export const Label = styled('label')(
  css({
    ...variants.buttonTitleRegular,
    display: 'inline-block',
    cursor: 'pointer',
    color: colors.textPrimaryInverse,
    mb: 12,
  }),
);

export const Input = styled('input')(
  css({
    ...variants.inputRegular,
    border: 'none',
    outline: 'none',
    px: '4px',
    py: '8px',
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: 4,
  }),
);
