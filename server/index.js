const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const port = process.env.PORT || 3000;
const db = process.env.MONGODB_URI || 'mongodb://localhost/amd-support';

const app = express();

mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true})
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
  .catch(err => console.error(`Connection error ${err}`));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

