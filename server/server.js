import { App } from '@tinyhttp/app';
import { logger } from '@tinyhttp/logger';
import { Liquid } from 'liquidjs';
import { marked } from 'marked';
import sirv from 'sirv';
import fs from 'fs';
import path from 'path';

const engine = new Liquid({
  extname: '.liquid',
});

const app = new App();

app
  .use(logger())
  .use('/', sirv('dist'))
  .listen(3000, () => console.log('Server available on http://localhost:3000'));

const readJson = (file) =>
  JSON.parse(fs.readFileSync(path.resolve('server', 'data', file), 'utf-8'));

app.get('/', async (req, res) => {
  const project = readJson('projects.json');
  return res.send(renderTemplate('server/views/index.liquid', {
    title: 'Home',
    projects: project
  }));
});

const renderTemplate = (template, data) => {
  return engine.renderFileSync(template, data);
};
