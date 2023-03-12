import React, { FC } from 'react';

import { LoadingSpinner } from '@components/LoadingSpinner';

import { LayoutContainer } from './styled';
import { LayoutProps } from './types';

export const Layout: FC<LayoutProps> = ({ data, isLoading, error, children }) => {
  if (isLoading) {
    return (
      <LayoutContainer>
        <LoadingSpinner />
      </LayoutContainer>
    );
  }

  if (error) {
    return (
      <LayoutContainer>
        <div>Error</div>
      </LayoutContainer>
    );
  }

  if (!data) {
    return (
      <LayoutContainer>
        <div>No data</div>
      </LayoutContainer>
    );
  }

  return <>{children}</>;
};
