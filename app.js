const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const router = require('./router/data.router');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);


module.exports = app;