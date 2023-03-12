import React, { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Greeting } from '@scenes/Greeting';
import { Authentication } from '@scenes/Authentication';

import { GlobalStyles } from './styled';

export const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
