import React, { FC } from 'react';

import { NavigationContainer } from './styled';
import { Tab } from './Tab';

export const Navigation: FC = () => {
  const onClick = () => {};

  return (
    <NavigationContainer>
      <Tab title="Отправка файла" tabId="file-sending" key="file-sending" onClick={onClick} />
      <Tab title="Файлы" tabId="files" key="files" onClick={onClick} />
      <Tab title="Люди" tabId="people" key="people" onClick={onClick} />
    </NavigationContainer>
  );
};
