const Router = require('koa-router')

const controller = require('../controller/home');
const router = new Router();

module.exports = (app) => {
    for (let key in controller) {
        if (key === 'user') {
            router.post(`/${key}`, controller[key])
        } else {
            router.get(`/${key}`, controller[key])
        }
    }

    app.use(router.routes());
}
