const express = require('express');
const { MangerCreate, MangerView} = require('../Controller/BackendController/MangerController');

const MangerRoutes = express.Router();

MangerRoutes.post('/create', MangerCreate);

MangerRoutes.get('/view', MangerView);  


module.exports = {MangerRoutes};