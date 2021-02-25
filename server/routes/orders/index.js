const router = require('express').Router(),
    get = require('./get'),
    put = require('./put'),
    del = require('./delete');


router.use(get, put, del);
module.exports = router;
