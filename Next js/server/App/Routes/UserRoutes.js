const express = require('express');
const { UserController } = require('../Controller/UserController');

const UserRoutes = express.Router();

UserRoutes.post('/create', UserController.UserCreate);

UserRoutes.get('/view', UserController.UserView);

module.exports = {UserRoutes};