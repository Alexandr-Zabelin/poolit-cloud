import css from '@styled-system/css';
import styled from 'styled-components';

import { colors } from '@src/styled-config';
import { Button } from '@components/Button';

export const FormContainer = styled('form')(
  css({
    backgroundColor: colors.bgPrimary,
    px: 76,
    pt: 80,
    pb: 128,
    boxSizing: 'border-box',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }),
);

export const SubmitButton = styled(Button)(
  css({
    m: 'auto',
    display: 'block',
    mt: 80,
    width: 290,
  }),
);
