import React from 'react';
import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import AppRouter from './AppRouter';

export default function render(url: string, opts: RenderToPipeableStreamOptions) {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <AppRouter />
    </StaticRouter>,
    opts
  );
  return stream;
}
