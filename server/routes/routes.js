
const { default: Axios } = require('axios');
const { response } = require('express');
const express = require('express'),
  axios = require('axios'),
  FormData = require('form-data');

const router = express.Router();
router.use(express.json());

//Rota GET para orders
router.get('/api/get_orders', (req, res) => {
  axios.get('http://localhost:8383/shop',
    {
      params: {
        username: req.query.username
      }
    })
    .then(response => {
      res.send(response.data)
    })
    .catch(error => {})
});

//Rota PUT para orders
router.put('/api/accept_orders', (req, res) => {
  
  axios.put(`http://localhost:8383/shop?order_id=${req.body.id}`)
  .then(response => {
    res.send({ message: 'Completed'})
  })
  .catch(error => console.log(error.response))
});

//Rota DELETE para orders
router.delete('/api/refuse_orders', (req, res) => {
  
  axios.delete('http://localhost:8383/shop', {
    params: {
      order_id: req.query.id
    }
  })
  .then(response => {
    res.send({message: 'Completed'})
  })
  .catch(error => console.log(error.response))
});

//Rota GET para services
router.get('/api/get_services', (req, res) => {
  axios.get('http://localhost:8282/search',
    {
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

//Rota PUT para services
router.put('/api/update_services', (req, res) => {

  const form = new FormData();
  form.append('petshop_name', req.body.petshop_name);
  form.append('petshop_username', req.body.petshop_username);
  form.append('service_id', req.body.service_id);

  axios.put('http://localhost:8282/manage', form,
    { headers: form.getHeaders() })
    .then(response => {
      if (response == 200) {
        res.send(response);
      }
    })
    .catch(error => {
      console.log(error)
    })

});

//Rota DELETE para services
router.delete('/api/delete_services', (req, res) => {
  axios.delete('http://localhost:8282/manage',
  { params: {
    petshop_username: req.query.petshop_username,
    service_id: req.query.service_id
  } })
    .then(response => {
      res.send({data: 'Deleted'})
    })
    .catch(error => console.log(error.response)
    )
});

//Rota POST para services
router.post('/api/add_services', (req, res) => {

  const form = new FormData();
  form.append('service_name', req.body.service_name);

  axios.post('http://localhost:8282/manage', form,
    { headers: form.getHeaders() })
    .then(response => {
      if (response.status == 200) {
        res.send({ id: response.data });
      }
    })
    .catch(error => console.log(error))
});

//Delete Service from User
router.delete('/api/delete_user_service', (req, res) => {
  
  axios.delete('http://localhost:8181/shops', {
    params: {
      username: req.query.petshop_username,
      password: req.query.password,
      service_id: req.query.service_id
    }
  })
  .then(response => {
    res.send({message: 'Done!'})
  })
  .catch(error => {
  })

});

//Rota PUT para users para editar Profile
router.put('/api/update_profile', (req, res) => {
  const form = new FormData();

  form.append('username', req.body.username);
  form.append('password', req.body.password);
  form.append('name', req.body.name);
  form.append('email', req.body.email);
  form.append('address', req.body.address);
  form.append('phone_number', req.body.phone_number);

  axios.put('http://localhost:8181/shops', form,
    { headers: form.getHeaders() })
    .then(response => {
      {
        res.send();
      }
    })
    .catch(error => console.log())

});


//Rota PUT para users
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

  axios.put('http://localhost:8181/shops', form,
    { headers: form.getHeaders() })
    .then(response => {
      {
        res.send();
      }
    })
    .catch(error => console.log())

});

//Rota POST para users
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

  axios.post('http://localhost:8181/shops', form,
    { headers: form.getHeaders() })
    .then(response => {
      if (response.status = 200) {
        res.send({ 'boolean': true, 'response': response.data });
      }
    })
    .catch(error => console.log('Deu erro'));
});

//Post para UserAPI Auth
router.post('/api/user_auth', (req, res) => {

  const form = new FormData();
  form.append('username', req.body.username);
  form.append('password', req.body.password);
  form.append('type', 'shop');

  axios.post('http://localhost:8181/auth', form, { headers: form.getHeaders() })
    .then(response => {
      if (response.status = 200) {
        res.send({ 'boolean': true, 'response': response.data });
      }
    })
    .catch(error => console.log(error));
});

module.exports = router;