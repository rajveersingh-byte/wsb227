const express = require('express');
const {ColorCreate,  ColorView} = require('../Controller/AdminController/ColorController');

const ColorRoutes = express.Router();

ColorRoutes.post('/create', ColorCreate);

ColorRoutes.get('/view', ColorView);


module.exports = {ColorRoutes};