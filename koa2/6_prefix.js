const Koa = require("koa");
const app = new Koa();

const Router = require("koa-router");
const router = new Router({
  prefix: "/home"
});
router.get("/abc", (ctx, next) => {
  console.log(ctx);
  console.log(next);
  ctx.body = "liushihong";
});

router.get("/test", (ctx, next) => {
  console.log(ctx);
  console.log(next);
  ctx.body = "TEST";
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log("服务开启成功在3000端口");
});
