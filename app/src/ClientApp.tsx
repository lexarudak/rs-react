import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { rickAndMortyApi, store } from 'store';
import AppRouter from './AppRouter';

const start = async () => {
  await store.dispatch(rickAndMortyApi.endpoints.searchCharacters.initiate(''));

  hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};

start();
