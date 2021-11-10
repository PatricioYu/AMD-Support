const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const port = process.env.PORT || 3000;
const db = process.env.MONGODB_URI || 'mongodb://localhost/amd-support';

const app = express();

app.use(express.static('public'));

mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true})
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
  .catch(err => console.error(`Connection error ${err}`));

// middleware
// parsear bodys con json
app.use(express.json());
// usar cors
app.use(cors());
// logger para desarrollo
app.use(morgan('dev'));
// router
app.use('/', require('./routes/note'));

// error handlers (despues de las rutas de la API)
// 404 not found
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});
// algun error distinto a not found
// defaultea a 500
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  // DEBUG: console.error(err.stack)
  res.json({ error: err.message });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});