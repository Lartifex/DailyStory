"use strict";

import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import routerStoryApi from "./routes/requestStoryRoutes.js";

const app = new Koa();

app.use(cors());
app.use(bodyParser());

app.use(routerStoryApi.routes());

const port = 3001;

app.listen(port);

console.log(`Server listening on port ${port}`);
