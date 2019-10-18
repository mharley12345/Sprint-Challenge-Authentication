const router = require('express').Router();
const bycrypt = require('bcryptjs')
const Users = require('../users/users-model')

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bycrypt.hashSync(user.password,10);
  user.password = hash;

  Users.add(user)
  .then(saved =>{
    res.status(201).json({message:`${saved.username} successfully added`})
  })
  .catch(error =>{
    res.status(500).json(error)
  })
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
