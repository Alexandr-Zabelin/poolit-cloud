import React, { FC, useCallback, useState } from 'react';

import { AuthSectionProps } from './types';
import { AuthType, Form } from './Form';
import { AuthSectionContainer, Tab, Tabs } from './styled';

const TABS_TITLES = {
  login: 'Вход',
  registration: 'Регистрация',
};

export const AuthSection: FC<AuthSectionProps> = ({ initAuthType, onSubmitClick, className }) => {
  const [authType, setAuthType] = useState(initAuthType);

  return (
    <AuthSectionContainer className={className}>
      <Tabs>
        <Tab isActive={authType === 'login'} onClick={() => setAuthType('login')} key="login">
          {TABS_TITLES.login}
        </Tab>
        <Tab isActive={authType === 'registration'} onClick={() => setAuthType('registration')} key="reg">
          {TABS_TITLES.registration}
        </Tab>
      </Tabs>
      <Form authType={authType} onSubmitClick={onSubmitClick} key={authType} />
    </AuthSectionContainer>
  );
};
