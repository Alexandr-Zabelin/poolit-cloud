import styled from 'styled-components';

import { colors, variants } from '@src/styled-config';
import css from '@styled-system/css';

export const SidebarContainer = styled('div')(
  css({
    backgroundColor: colors.bgPrimary,
    height: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 300,
    pt: 20,
    pb: 28,
  }),
);

export const Title = styled('h2')({
  ...variants.h2Regular,
  color: colors.textPrimaryInverse,
  width: '100%',
  textAlign: 'center',
});

export const LogoutButton = styled('a')(
  css({
    ...variants.buttonRegular,

    cursor: 'pointer',
    mx: 'auto',
    backgroundColor: colors.bgPrimary,
    color: colors.textPrimaryInverse,
  }),
);
