// 单点入口
const Koa = require('koa');
const config = require('./config/default.js');
const postRouter = require('./routers/post.js');
const signinRouter = require('./routers/signin.js');
const app = new Koa();
const ejs = require('ejs');
const views = require('koa-views');
const path = require('path');
// ? use 应答模式 中间件是处理应用请求的核心
// 启动路由中间件 
app.use(
  views(
    path.join(__dirname, './views'), {
  extension: 'ejs'
}));
app.use(postRouter.routes());
app.use(signinRouter.routes());
app.listen(config.port);
console.log(`listening on port ${config.port}`);