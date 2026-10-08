const express = require('express');
const { ColorRoutes } = require('./ColorRoutes');
const { CategoryRoutes } = require('./CategoryRoutes');

const AdminRoutes = express.Router();

AdminRoutes.use('/color', ColorRoutes);

AdminRoutes.use('/category', CategoryRoutes);


module.exports = {AdminRoutes};