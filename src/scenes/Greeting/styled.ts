import styled from 'styled-components';

import { Banner } from '@components/Banner';

export const TopSection = styled('div')({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const GreetingBanner = styled(Banner)({
  width: '50vw',
  minWidth: '300px',
});
