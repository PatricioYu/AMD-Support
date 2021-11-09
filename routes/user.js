const express = require('express');
const User    = require('../models/User');

const router = express.Router();

// GET /users
router.get('/users', (req, res, next) => {
  User.find()                  // todos los docs de users
    .select('_id username password')  
    .sort('-updatedAt')        // ordena por modificacion descendente
    .exec((err, users) => {
      if (err) return next(err);
      // modifico un poco el resultado antes de mandarlo
      users = users.map(user => ({
        username: user.username,
        password: note.password,
        details: {
          method: 'GET',
          url: `${req.protocol}://${req.hostname}:3000/routes/user/${user._id}`
        }
      }));
      res.status(200).json({
        count: users.length,
        users: users,
        create: {
          method: 'POST',
          url: `${req.protocol}://${req.hostname}:3000/routes/users`
        }
      });
    });
});

// GET /users/id
router.get('/users/:id', (req, res, next) => {
  User.findById(req.params.id)
    .select('_id username password createdAt updatedAt')  // todo menos __v
    .exec((err, note) => {
      if (err) return next(err);
      if (!note) return res.status(404).json({ msg: 'Not found' });
      res.status(200).json({
        user: user,
        links: {
          update: {
            method: 'PUT',
            url: `${req.protocol}://${req.hostname}:3000/routes/users/${user._id}`
          },
          delete: {
            method: 'DELETE',
            url: `${req.protocol}://${req.hostname}:3000/routes/users/${user._id}`
          }
        }
      });
    });
});

// POST /users
router.post('/users', (req, res, next) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });
  user.save((err, note) => {
    if (err) return next(err);
    res.status(201).json(user);
  });
});

// PUT /users/id
router.put('/users/:id', (req, res, next) => {
  const user = {
    username: req.body.title,
    password: req.body.text,
    updatedAt: Date.now()
  };
  const options = {
    new: true,
    omitUndefined: true
  };
  User.findByIdAndUpdate(req.params.id, user, options).exec((err, user) => {
    if (err) return next(err);
    if (!user) return res.status(404).json({ msg: 'Not found' });
    res.status(200).json(user);
  });
});

// DELETE /users/id
router.delete('/users/:id', (req, res, next) => {
  User.findByIdAndRemove(req.params.id).exec((err, note) => {
    if (err) return next(err);
    if (!user) return res.status(404).json({ msg: 'Not found' });
    res.status(200).json({ msg: 'Delete OK' });
  });
});
module.exports = router;