import React, { FC } from 'react';

import { Sidebar } from '@components/Sidebar';

import { PageLayoutContainer } from './styled';
import { PageLayoutProps } from './types';

export const PageLayout: FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <PageLayoutContainer>
      <Sidebar />
    </PageLayoutContainer>
  );
};
