import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { TopSection, GreetingBanner } from './styled';

const DATA = {
  title: 'Poolit',
  buttonTitle: 'Перейти в сервис',
};

export const Greeting: FC = () => {
  const navigateTo = useNavigate();

  const onButtonClick = useCallback(() => {
    navigateTo('/auth');
  }, [navigateTo]);

  return (
    <TopSection>
      <GreetingBanner data={DATA} onButtonClick={onButtonClick} />
    </TopSection>
  );
};
