import styled from 'styled-components';

import { AuthSection } from '@components/AuthSection';

export const AuthenticationContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh  ',
});

export const AuthContent = styled(AuthSection)({
  width: '50vw',
  minWidth: '370px',
});
