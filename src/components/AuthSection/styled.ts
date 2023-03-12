import css from '@styled-system/css';
import styled from 'styled-components';

import { colors, variants } from '@src/styled-config';

interface TabProps {
  isActive: boolean;
}

export const AuthSectionContainer = styled('div')({
  width: '50vw',
});

export const Tabs = styled('div')({
  display: 'flex',
  width: '100%',
});

export const Tab = styled('button')<TabProps>(({ isActive }) =>
  css({
    border: '1px solid',
    borderColor: colors.borderSecondary,
    boxSizing: 'border-box',
    cursor: 'pointer',
    width: '50%',
    py: 20,
    px: 12,
    backgroundColor: isActive ? colors.bgPrimary : colors.bgBlank,
    color: isActive ? colors.textPrimaryInverse : colors.textPrimaryBlank,
    ...variants.buttonH1Regular,

    '&:first-child': {
      borderTopLeftRadius: 10,
    },

    '&:last-child': {
      borderTopRightRadius: 10,
    },

    '&:focus': {
      zIndex: 1,
    },
  }),
);
