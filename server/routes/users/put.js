const router = require('express').Router(),
    axios = require('axios'),
    FormData = require('form-data'),
    usersApiUrl = require('../../env_vars').usersApiBaseUrl;


router.put('/api/update_profile', (req, res) => {
    const form = new FormData();

    form.append('username', req.body.username);
    form.append('password', req.body.password);
    form.append('name', req.body.name);
    form.append('email', req.body.email);
    form.append('address', req.body.address);
    form.append('phone_number', req.body.phone_number);

    axios.put(`${usersApiUrl}/shops`, form, {
        headers: form.getHeaders()
    })
        .then(response => {
            {
                res.send();
            }
        })
        .catch(error => console.log())

});


router.put('/api/update_users', (req, res) => {

    let services = JSON.stringify({
        service_name: req.body.service_name,
        service_id: req.body.service_id,
        price: req.body.price
    })

    const form = new FormData();

    form.append('username', req.body.username);
    form.append('password', req.body.password);
    form.append('services', services);
    form.append('type', 'shop');

    axios.put(`${usersApiUrl}/shops`, form, {
        headers: form.getHeaders()
    })
        .then(response => {
            {
                res.send();
            }
        })
        .catch(error => console.log())

});

module.exports = router;
