const express = require('express');
const multer = require('multer');
const { CategoryView, CategoryCreate } = require('../Controller/AdminController/CategoryController');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/category')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname.toLowerCase());
    }
})

const upload = multer({ storage: storage })

const CategoryRoutes = express.Router();

CategoryRoutes.post('/create', upload.single('CategoryImage'), CategoryCreate);

CategoryRoutes.get('/view', CategoryView);

module.exports = { CategoryRoutes };