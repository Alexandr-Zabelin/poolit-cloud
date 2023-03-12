import React, { FC } from 'react';

import { Navigation } from '@components/Navigation';

import { LogoutButton, SidebarContainer, Title } from './styled';

const TITLE = 'Poolit';

export const Sidebar: FC = () => {
  return (
    <SidebarContainer>
      <div>
        <Title>{TITLE}</Title>
        <Navigation />
      </div>
      <LogoutButton>Выйти из аккаунта</LogoutButton>
    </SidebarContainer>
  );
};
