import css from '@styled-system/css';
import styled from 'styled-components';

import { colors } from '@src/styled-config';

export const ModalBody = styled('div')(
  css({
    px: 36,
    py: 24,
    borderRadius: 10,
    width: '50vw',
    backgroundColor: colors.bgBlank,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }),
);

export const CloseButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});
