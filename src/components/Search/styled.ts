import css from '@styled-system/css';
import styled from 'styled-components';

import { colors, variants } from '@src/styled-config';

export const SearchContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  border: '1px solid',
  width: '80%',
  borderColor: colors.borderTextiary,
  borderRadius: 8,
});

export const IconContainer = styled('div')(
  css({
    mr: 12,
  }),
);

export const SearchField = styled('input')(
  css({
    ...variants.inputRegular,
    outline: 'none',
    border: 'none',
    width: '100%',
    borderRadius: 10,
    p: '8px',

    '&:focus': {
      outline: 'none',
      border: 'none',
    },
  }),
);
