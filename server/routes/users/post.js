const router = require('express').Router(),
    axios = require('axios'),
    FormData = require('form-data'),
    usersApiUrl = require('../../env_vars').usersApiBaseUrl;


router.post('/api/user_register', (req, res) => {
    const form = new FormData();
    form.append('username', req.body.username);
    form.append('password', req.body.password);
    form.append('email', req.body.email);
    form.append('cnpj', req.body.cnpj);
    form.append('address', req.body.address);
    form.append('name', req.body.name);
    form.append('phone_number', req.body.phone_number);
    form.append('type', 'shop');

    axios.post(`${usersApiUrl}/shops`, form, {
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
        .catch(error => console.log('Deu erro'));
});

module.exports = router;
