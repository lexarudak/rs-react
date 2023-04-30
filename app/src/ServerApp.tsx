import React from 'react';
import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { store } from 'store';
import AppRouter from './AppRouter';

export default function render(url: string, opts: RenderToPipeableStreamOptions) {
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <AppRouter />
      </StaticRouter>
    </Provider>,
    opts
  );
  return stream;
}
