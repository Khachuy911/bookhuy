const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require('path');
const uploadController = require("../app/controllers/uploadController");
const multerFile = require('../app/models/upfile.model');

router.get('/',uploadController.index);
router.post('/',multerFile.single('name'),uploadController.upload)

module.exports = router;
