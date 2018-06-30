// const request = require('request');

// request({
//     url: 'http://localhost:3000/post_api',
//     method: 'POST',
//     qs: {
//         name: 'yangzhinian',
//     },
//     form: {
//         password: '111111',
//     },
// }, (error, res) => {
//     console.log(res.body);
// });
// request({
//     url: 'http://183.136.239.168/mroute.html?method=beidian.h5.mart.home&_abr_=01634e25314c4dae9f517343a4bcb4fd0bdc68ab2a5b3447d4&shop_id=114216&page=2&time_slot_id=',
//     headers: {
//         Host: 'api.beidian.com',
//         Cookie: 'HX-BETA=13;project_file=shadow;',
//     },
// }, (error, res) => {
//     console.log(res.body);
// });

// request({
//     url: 'https://183.136.239.168/',
//     headers: {
//         Host: 'm.beibei.com',
//         Cookie: 'HX-BETA=31;YUFA=sz;',
//     },
// }, (error, res) => {
//     console.log(res.body);
// });

let request = require('request');

request({
    url: 'http://tiyu.baidu.com/api/match/%E4%B8%96%E7%95%8C%E6%9D%AF/live/date/2018-07-02/direction/after?from=self',
    headers: {
        // Host: 'api.beidian.com',
        // Cookie: 'HX-BETA=13;project_file=shadow;',
    },
    // proxy: 'http://183.136.239.168'
}, (error, res) => {
    console.log(res.body);
});