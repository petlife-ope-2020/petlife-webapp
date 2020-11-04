const express = require('express'),
      axios = require('axios'),
      http = require('http'),
      FormData = require('form-data');

const router = express.Router();
router.use(express.json);

//Rota GET para orders
router.get('/api/get_orders', (req,res) => {
  
});

//Rota PUT para orders
router.put('/api/accept_orders', (req,res) => {
  
});

//Rota DELETE para orders
router.delete('/api/refuse_orders', (req,res) => {
  
});

//Rota GET para services
router.get('/api/get_services', (req,res) => {
  
});

//Rota PUT para services
router.put('/api/update_services', (req,res) => {
  
});

//Rota DELETE para services
router.delete('/api/delete_services', (req,res) => {
  
});

//Rota POST para services
router.post('/api/add_services', (req,res) => {
  
});

//Rota POST para users
router.post('/api/user_register', (req,res) => {
  
});

//Post para UserAPI Auth
router.post('/api/user_auth', (req, res) => {

  const form = new FormData();
  form.append('username', req.body.username);
  form.append('password', req.body.password);
  form.append('type', 'shop');

  axios.post('http://localhost:8181/auth', form, 
  { headers: form.getHeaders() })
  .then(response => 
    {
      if (response.status = 200){
        res.send({'boolean': true, 'response': response});
      }
    })
  .catch(error => console.log(error));
});

module.exports = router;