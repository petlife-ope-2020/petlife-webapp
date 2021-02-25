const router = require('express').Router(),
    axios = require('axios'),
    FormData = require('form-data'),
    servicesApiUrl = require('../../env_vars').servicesApiBaseUrl;


router.put('/api/update_services', (req, res) => {

    const form = new FormData();
    form.append('petshop_name', req.body.petshop_name);
    form.append('petshop_username', req.body.petshop_username);
    form.append('service_id', req.body.service_id);

    axios.put(`${servicesApiUrl}/manage`, form, {
        headers: form.getHeaders()
    })
        .then(response => {
            if (response == 200) {
                res.send(response);
            }
        })
        .catch(error => {
            console.log(error)
        })

});

module.exports = router;
