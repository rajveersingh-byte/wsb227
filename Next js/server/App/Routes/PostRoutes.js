const express = require('express');
const { PostCreate,PostView } = require('../Controller/PostController');

const PostRoutes = express.Router();

PostRoutes.post('/create', PostCreate);

PostRoutes.get('/postview', PostView)



module.exports = {PostRoutes};