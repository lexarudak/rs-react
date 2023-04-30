import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import renderApp from './dist/server/ServerApp.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3001;

const html = fs.readFileSync(path.resolve(__dirname, './dist/client/index.html')).toString();

const [firstPart, lastPart] = html.split('my awesome code');

const app = express();

app.use(express.static('public'));

app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));
app.use((req, res) => {
  res.write(firstPart);
  const stream = renderApp(req.url, {
    onShellReady() {
      stream.pipe(res);
    },
    onShellError(err: unknown) {
      console.error(err);
    },
    onAllReady() {
      res.write(lastPart);
      res.end();
    },
    onError(err: unknown) {
      console.error(err);
    },
  });
});

console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);
