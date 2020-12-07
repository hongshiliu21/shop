const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
  let url = ctx.url,
    query = ctx.query, // 对象
    querystring = ctx.querystring; // 字符串

  ctx.body = {
    url,
    query,
    querystring
  };
});

app.listen(3000, () => {
  console.log("服务开启成功在3000端口");
});
