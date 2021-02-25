const router = require('express').Router(),
    get = require('./get'),
    post = require('./post'),
    put = require('./put'),
    del = require('./delete');


router.use(get, post, put, del);
module.exports = router;
