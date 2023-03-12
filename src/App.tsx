import React, { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Greeting } from '@scenes/Greeting';
import { Authentication } from '@scenes/Authentication';
import { Files } from '@scenes/Files';

import { GlobalStyles } from './styled';

export const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/files" element={<Files />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
