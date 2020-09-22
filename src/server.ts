import cors from "@koa/cors";
import Koa from "koa";
import bodyParser from "koa-bodyparser";

import { greetingsRouter } from "./routes";

const app = new Koa();

app.use(cors());
app.use(bodyParser());

app.use(greetingsRouter.routes());
app.use(greetingsRouter.allowedMethods());

export const server = app;
