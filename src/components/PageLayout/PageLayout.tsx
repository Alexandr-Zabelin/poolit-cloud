import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Sidebar } from '@components/Sidebar';

import { PageLayoutProps } from './types';
import { MainContent, PageLayoutContainer, Title } from './styled';

export const PageLayout: FC<PageLayoutProps> = ({ title, children }) => {
  const navigateTo = useNavigate();

  const onNavTabClick = useCallback(
    (link: string) => {
      navigateTo(link);
    },
    [navigateTo],
  );

  return (
    <PageLayoutContainer>
      <Sidebar onNavTabClick={onNavTabClick} />
      <MainContent>
        <Title>{title}</Title>
        {children}
      </MainContent>
    </PageLayoutContainer>
  );
};
