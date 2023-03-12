import css from '@styled-system/css';
import styled from 'styled-components';

import { colors, variants } from '@src/styled-config';

export const TabContainer = styled('a')(
  css({
    display: 'block',
    backgroundColor: colors.bgPrimary,
    color: colors.textPrimaryInverse,
    py: '8px',
    width: '100%',
    boxSizing: 'border-box',
    textAlign: 'center',
    cursor: 'pointer',
    border: '1px solid',
    borderLeft: 'none',
    borderRight: 'none',
    borderColor: colors.borderPrimaryInverse,
    ...variants.buttonRegular,

    '&:not(:first-child)': {
      borderTop: 'none',
    },
  }),
);
