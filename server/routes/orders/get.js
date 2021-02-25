const router = require('express').Router(),
    ordersApiUrl = require('../../env_vars');


router.get('/api/get_orders', (req, res) => {
    axios.get(`${ordersApiUrl}/shop`, {
        params: {
            username: req.query.username
        }
    })
        .then(response => {
            res.send(response.data)
        })
        .catch(error => { })
});

module.exports = router;
