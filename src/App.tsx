import React, { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Greeting } from '@scenes/Greeting';
import { Authentication } from '@scenes/Authentication';
import { Files } from '@scenes/Files';
import { Upload } from '@scenes/Upload';
import { People } from '@scenes/People';
import { NoPage } from '@scenes/NoPage';

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
          <Route path="/upload" element={<Upload />} />
          <Route path="/people" element={<People />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
