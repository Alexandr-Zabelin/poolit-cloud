import styled, { keyframes } from 'styled-components';

import { colors } from '@src/styled-config';

const roundingAnimation = keyframes({
  from: {
    transform: 'rotate(0)',
  },

  to: {
    transform: 'rotate(360deg)',
  },
});

export const Ring = styled('div')({
  display: 'inline-block',
  position: 'relative',
  width: 80,
  height: 80,
});

export const RingQuater = styled('div')`
  box-sizing: border-box;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid ${colors.borderSecondary};
  border-radius: 50%;
  border-color: ${colors.borderSecondary} transparent transparent transparent;
  animation: ${roundingAnimation} 0.7s linear infinite forwards;
`;
