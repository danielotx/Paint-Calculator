const express = require('express');
const routes = require('../routes/index');
const error = require('../middlewares/error');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', routes.paint);

app.use(error);
module.exports = app;
