import { variants } from '@src/styled-config';
import css from '@styled-system/css';
import styled from 'styled-components';

export const PageLayoutContainer = styled('div')({
  display: 'flex',
});

export const MainContent = styled('div')({});

export const Title = styled('h3')(
  css({
    ...variants.h3Regular,
    mt: 20,
    mb: 40,
    ml: 40,
  }),
);
