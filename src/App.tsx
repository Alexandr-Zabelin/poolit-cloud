import React, { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './styled';

export const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <div>AAAA</div>
    </>
  );
};
