// const Koa = require('koa');
// const app = new Koa();

// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/') {
//         ctx.response.body = '<h1>index page</h1>';
//     } else {
//         await next();
//     }
// });
// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/home') {
//         ctx.response.body = '<h1>home page</h1>';
//     } else {
//         await next();
//     }
// });
// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/404') {
//         ctx.response.body = '<h1>404 Not Found</h1>';
//     } else {
//         await next();
//     }
// });

// app.listen(3000, ()=>{
//   console.log('server is running at http://localhost:3000')
// })

const Koa = require('koa')
// 注意 require('koa-router') 返回的是函数:
const path = require('path');
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser') // 针对POST请求，parse请求体的数据格式，挂靠在ctx.request.body
const nunjucks = require('koa-nunjucks-2')

const app = new Koa()
const router = new Router();

app.use(bodyparser());

app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),// 指定视图目录
    nunjucksConfig: {
        trimBlocks: true // 开启转义 防Xss
    }
}));

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`
})

router.get('/home', async (ctx, next) => {
    ctx.response.body = '<h1>HOME page</h1>'
})

router.get('/404', async (ctx, next) => {
    ctx.response.body = '<h1>404 page</h1>'
})

router.get('/home/login', async (ctx, next) => {
    await ctx.render('home/login', {
        btnName: 'GoGoGo'
    })
})

router.post('/post_api', async (ctx, next) => {
    console.log(ctx.request.query);
    console.log(ctx.request.body);

    // 获取post请求参数
    ctx.response.body = '这是一个post请求'
})

 // 调用路由中间件
 app.use(router.routes())

app.listen(3000, ()=>{
  console.log('server is running at http://localhost:3000')
})