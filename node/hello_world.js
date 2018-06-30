// const Koa = require('koa');
// const app = new Koa();

// app.use(async (ctx, next) => {
//     next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>Hello world</h1>';
// });

// app.listen(3000, () => {
//     console.log('server is running at http://localhost:3000')
// });

const http = require('http');

const server  = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'bar');
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello world</h1>');
});

server.listen(3000);