const router = require('express').Router(),
    post = require('./post'),
    put = require('./put'),
    del = require('./delete');


router.use(post, put, del);
module.exports = router;
