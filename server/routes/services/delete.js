const router = require('express').Router(),
    axios = require('axios'),
    servicesApiUrl = require('../../env_vars').servicesApiBaseUrl;


router.delete('/api/delete_services', (req, res) => {
    axios.delete(`${servicesApiUrl}/manage`, {
        params: {
            petshop_username: req.query.petshop_username,
            service_id: req.query.service_id
        }
    })
        .then(response => {
            res.send({
                data: 'Deleted'
            })
        })
        .catch(error => console.log(error.response))
});

module.exports = router;
