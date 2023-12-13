'use strict';

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import requestStoryRouter from './routes/requestStoryRoutes.js';
import userStoryRouter from './routes/userStoryRoutes.js';

const app = new Koa();

app.use(cors());
app.use(bodyParser());

app.use(requestStoryRouter.routes());
app.use(userStoryRouter.routes());

const port = 3001;

app.listen(port);

console.log(`Server listening on port ${port}`);
