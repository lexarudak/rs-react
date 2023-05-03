import React from 'react';
import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { rickAndMortyApi, store } from 'store';
import AppRouter from './AppRouter';

export const renderApp = async (url: string, opts: RenderToPipeableStreamOptions) => {
  await store.dispatch(rickAndMortyApi.endpoints.searchCharacters.initiate(''));

  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <AppRouter />
      </StaticRouter>
    </Provider>,
    opts
  );
  return stream;
};
