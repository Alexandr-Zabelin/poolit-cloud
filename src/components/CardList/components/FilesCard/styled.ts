import css from '@styled-system/css';
import styled from 'styled-components';

import { colors, variants } from '@src/styled-config';

export const CardConatiner = styled('div')(
  css({
    border: '1px solid',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: colors.borderTextiary,
    width: 200,
    borderRadius: 10,
    px: 20,
    py: 12,
    boxSizing: 'border-box',
  }),
);

export const FileName = styled('p')(
  css({
    ...variants.h4Regular,
    mb: 16,
    textAlign: 'center',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
);
