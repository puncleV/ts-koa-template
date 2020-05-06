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

router.get("/:topicId", (ctx: Koa.Context) => {
  ctx.body = controller.getOne(ctx.params.topicId);
});

export const topicsRouter = router;
