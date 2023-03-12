import css from '@styled-system/css';
import styled from 'styled-components';

import { colors, variants } from '@src/styled-config';

export const BannerContainer = styled('div')(
  css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.bgPrimary,
    borderRadius: 10,
    pt: 100,
    pb: 72,
    px: 32,
  }),
);

export const Title = styled('h2')(
  css({
    mb: 80,
    ...variants.h1Regular,
    color: colors.textPrimaryInverse,
  }),
);
