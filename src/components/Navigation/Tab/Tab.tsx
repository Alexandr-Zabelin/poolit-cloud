import React, { FC, useCallback } from 'react';

import { TabsProps } from './types';
import { TabContainer } from './styled';

export const Tab: FC<TabsProps> = ({ title, tabId, onClick }) => {
  const onTabClick = useCallback(() => onClick?.(tabId), [onClick, tabId]);

  return <TabContainer onClick={onTabClick}>{title}</TabContainer>;
};
