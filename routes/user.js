const express = require('express');
const bcrypt  = require('bcrypt');
const router  = express.Router();
const User    = require('../models/User');

// GET
router.get('/Usuario', (req, res) => {
  User.find().exec((err, Usuario) => {
    if (err) throw err;
    res.status(200).json(Usuario);
  });
});
// GET :id
router.get('/Usuario/:id', (req, res) => {
  User.findById(req.params.id).exec((err, Usuario) => {
    if (err) throw err;
    res.status(200).json(Usuario);
  });
});
// POST
router.post('/Usuario', (req, res, next) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      console.error('Error when registering new user:', err);
      return res.status(500).send('Error interno del servidor, intente nuevamente');
    }
    if (user) {
      console.error('User already exists');      
      return res.status(400).send('El usuario ya existe'); 
    }
    if (!user) {
      const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        createdAt: req.body.createdAt
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) throw err;
          user.password = hash;
          user.save(err => {
            if (err) throw err;
            res.status(201).json(user);
          });
        });
      });
    }
  });
});

module.exports = router;
