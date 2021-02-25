const router = require('express').Router(),
    ordersRouter = require('./orders'),
    servicesRouter = require('./services'),
    usersRouter = require('./users');


router.use(ordersRouter, servicesRouter, usersRouter);
module.exports = router;
