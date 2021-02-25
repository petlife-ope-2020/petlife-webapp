const router = require('express').Router(),
    axios = require('axios'),
    FormData = require('form-data'),
    usersApiUrl = require('../../env_vars').usersApiBaseUrl;


router.post('/api/user_auth', (req, res) => {

    const form = new FormData();
    form.append('username', req.body.username);
    form.append('password', req.body.password);
    form.append('type', 'shop');

    axios.post(`${usersApiUrl}/auth`, form, {
        headers: form.getHeaders()
    })
        .then(response => {
            if (response.status = 200) {
                res.send({
                    'boolean': true,
                    'response': response.data
                });
            }
        })
        .catch(error => console.log(error));
});

module.exports = router;
