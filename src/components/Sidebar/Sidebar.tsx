import React, { FC, useCallback, useState } from 'react';
import CloudCircleRoundedIcon from '@mui/icons-material/CloudCircleRounded';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { colors } from '@src/styled-config';

import { SidebarProps } from './types';
import { getIcon } from './utils';
import { NAV_TABS, TITLE } from './constants';
import { Body, Header, PlatformTitle, SidebarContainer, Tab, TabTitle, Title } from './styled';

const CloudIcon = <CloudCircleRoundedIcon htmlColor={colors.bgPrimary} fontSize="large" />;

export const Sidebar: FC<SidebarProps> = ({ onNavTabClick }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleIsOpen = useCallback(() => setIsOpen(prev => !prev), [setIsOpen]);

  return (
    <SidebarContainer variant="permanent" open={isOpen}>
      <Header isOpen={isOpen}>
        <PlatformTitle>
          {isOpen ? CloudIcon : <IconButton onClick={toggleIsOpen}>{CloudIcon}</IconButton>}
          <Title isOpen={isOpen}>{TITLE}</Title>
        </PlatformTitle>
        {isOpen && (
          <IconButton onClick={toggleIsOpen}>
            <ChevronLeftIcon />
          </IconButton>
        )}
      </Header>
      <Body isOpen={isOpen}>
        {NAV_TABS.map(({ title, link }) => (
          <Tab onClick={() => onNavTabClick(link)} key={`navTab_${link}`}>
            {getIcon(link)}
            <TabTitle isOpen={isOpen}>{title}</TabTitle>
          </Tab>
        ))}
      </Body>
    </SidebarContainer>
  );
};
