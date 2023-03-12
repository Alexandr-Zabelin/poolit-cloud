import React, { FC, useCallback } from 'react';

import { AuthRequestData } from '@components/AuthSection';
import { AuthContent, AuthenticationContainer } from './styled';

export const Authentication: FC = () => {
  const onSubmitClick = useCallback((data: AuthRequestData) => console.log(data), []);

  return (
    <AuthenticationContainer>
      <AuthContent initAuthType="login" onSubmitClick={onSubmitClick} />
    </AuthenticationContainer>
  );
};
