import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
