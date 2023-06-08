const router = require("express").Router();
const controller = require('../controllers/controller')

router.post('/upload', controller.uploadFile);

module.exports = router