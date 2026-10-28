const express = require('express');
const { UserCreate, UserView } = require('../Controller/BackendController/UserController');

const UserRoutes = express.Router();


UserRoutes.post('/create', UserCreate);

UserRoutes.get('/view', UserView);


module.exports = {UserRoutes};