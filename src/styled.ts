import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { colors } from './styled-config';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  
  button:focus-visible,
  input:focus-visible {
    outline: 2px solid;
    outline-color: ${colors.borderPrimary};
  },
`;
