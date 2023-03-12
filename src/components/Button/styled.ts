import css from '@styled-system/css';
import styled from 'styled-components';

import { colors, variants } from '@src/styled-config';

interface ButtonComponentProps {
  isBgColorPrimary?: boolean;
}

export const ButtonComponent = styled('button')<ButtonComponentProps>(({ isBgColorPrimary }) =>
  css({
    ...variants.buttonRegular,
    backgroundColor: isBgColorPrimary ? colors.bgPrimary : colors.bgBlank,
    color: isBgColorPrimary ? colors.textPrimaryInverse : colors.textPrimary,
    cursor: 'pointer',
    borderRadius: 10,
    py: 12,
    px: 16,
    outline: 'none',
    border: 'none',
  }),
);
