const router = require('express').Router(),
    ordersApiUrl = require('../../env_vars');


router.put('/api/accept_orders', (req, res) => {

    axios.put(`${ordersApiUrl}/shop?order_id=${req.body.id}`)
        .then(response => {
            res.send({
                message: 'Completed'
            })
        })
        .catch(error => console.log(error.response))
});

module.exports = router;
