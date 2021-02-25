const router = require('express').Router(),
    axios = require('axios'),
    servicesApiUrl = require('../../env_vars').servicesApiBaseUrl;
    

router.get('/api/get_services', (req, res) => {
    axios.get(`${servicesApiUrl}/search`, {
        params: {
            service_name: ''
        }
    })
        .then(response => {
            if (response.status == 200) {
                res.send(response.data);
            }
        })
        .catch(error => console.log(error));
});

module.exports = router;
