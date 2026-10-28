const express = require('express');
const { PostRoutes } = require('./PostRoutes');
const { UserRoutes } = require('./UserRoutes');
const { VoteRoutes } = require('./VoteRoutes');


const CommanRoutes = express.Router();

CommanRoutes.use('/post', PostRoutes);

CommanRoutes.use('/user', UserRoutes);

CommanRoutes.use('/vote', VoteRoutes);


module.exports = {CommanRoutes};