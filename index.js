const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path')

const port = process.env.PORT || 4000;
const db = process.env.MONGODB_URI || 'mongodb://localhost/amd-support';

const app = express();

app.use('/static', express.static(path.join(__dirname, 'client/build')));

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/', require('./routes/user'));
// 5to middleware (error 404 not found)
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});
// con el error 404 o 500 si vino de otro lado el problema
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  // para mas detalles usar: console.error(err.stack)
  res.json({ error: err.message });
});

mongoose
  .connect(db, { useNewUrlParser: true})
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
  .catch(err => console.error(`Connection error ${err}`));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});