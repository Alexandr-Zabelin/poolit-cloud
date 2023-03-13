import React, { FC, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthRequestData } from '@components/AuthSection';

import { AuthContent, AuthenticationContainer } from './styled';

export const Authentication: FC = () => {
  const navigateTo = useNavigate();

  useEffect(() => {
    console.log('trying to fetch');
    fetch('http://51.250.97.97/api/user/register', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        username: 'testUsername3',
        password: 'testPassword3',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.headers.forEach((v, k) => console.log(`${k}: ${v}`)))
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }, []);

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
