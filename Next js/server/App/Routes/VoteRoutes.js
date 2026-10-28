const express = require('express');
const { VoteController } = require('../Controller/VoteController');


const VoteRoutes = express.Router();


VoteRoutes.post('/vote', VoteController.VoteCreate);

VoteRoutes.get('/view', VoteController.voteView);

module.exports = {VoteRoutes};