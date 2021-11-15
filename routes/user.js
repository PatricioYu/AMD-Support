const express = require('express');
const bcrypt  = require('bcrypt');
const router  = express.Router();
const User    = require('../models/User');

const router = express.Router();

router.post('/register', (req, res, next) => {
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
});
router.get('/register', (req, res, next) => {

});
router.get('/register/id:', (req, res, next) => {

});
router.post('/register/id:', (req, res, next) => {

});
router.post('/register/id:', (req, res, next) => {

});

module.exports = router;