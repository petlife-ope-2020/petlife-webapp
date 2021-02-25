const router = require('express').Router(),
    ordersApiUrl = require('../../env_vars');


router.delete('/api/refuse_orders', (req, res) => {

    axios.delete(`${ordersApiUrl}/shop`, {
        params: {
            order_id: req.query.id
        }
    })
        .then(response => {
            res.send({
                message: 'Completed'
            })
        })
        .catch(error => console.log(error.response))
});

module.exports = router;
