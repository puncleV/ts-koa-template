import Koa from "koa";
import Router from "koa-router";
import {TopicsController} from "../controllers/topics-controller";

const router = new Router({
  prefix: "/topics",
});

const controller = new TopicsController();

router.get("/", (ctx: Koa.Context) => {
  ctx.body = controller.getAll();
});

export const topicsRouter = router;
