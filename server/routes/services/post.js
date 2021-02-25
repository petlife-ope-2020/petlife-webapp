const router = require('express').Router(),
    axios = require('axios'),
    FormData = require('form-data'),
    servicesApiUrl = require('../../env_vars').servicesApiBaseUrl;


router.post('/api/add_services', (req, res) => {

    const form = new FormData();
    form.append('service_name', req.body.service_name);

    axios.post(`${servicesApiUrl}/manage`, form, {
        headers: form.getHeaders()
    })
        .then(response => {
            if (response.status == 200) {
                res.send({
                    id: response.data
                });
            }
        })
        .catch(error => console.log(error))
});

module.exports = router;
