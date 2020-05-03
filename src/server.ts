import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import {topicsRouter} from "./routes";

const app = new Koa();

app.use(cors());
app.use(bodyParser());

app.use(topicsRouter.routes());
app.use(topicsRouter.allowedMethods());

export const server = app;
