const router = require('express').Router(),
    axios = require('axios'),
    FormData = require('form-data'),
    usersApiUrl = require('../../env_vars').usersApiBaseUrl;


router.delete('/api/delete_user_service', (req, res) => {

    axios.delete(`${usersApiUrl}/shops`, {
        params: {
            username: req.query.petshop_username,
            password: req.query.password,
            service_id: req.query.service_id
        }
    })
        .then(response => {
            res.send({
                message: 'Done!'
            })
        })
        .catch(error => { })

});

module.exports = router;
