import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthRequestData } from '@components/AuthSection';

import { AuthContent, AuthenticationContainer } from './styled';

export const Authentication: FC = () => {
  const navigateTo = useNavigate();

  const onSubmitClick = useCallback(
    (data: AuthRequestData) => {
      console.log(data);

      if (data.authType === 'login') {
        navigateTo('/files');
      }
    },
    [navigateTo],
  );

  return (
    <AuthenticationContainer>
      <AuthContent initAuthType="login" onSubmitClick={onSubmitClick} />
    </AuthenticationContainer>
  );
};
