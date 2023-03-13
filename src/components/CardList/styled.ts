import css from '@styled-system/css';
import styled from 'styled-components';

export const CardListContainer = styled('div')(
  css({
    mt: 40,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
  }),
);
