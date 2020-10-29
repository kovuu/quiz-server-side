const express = require('express')
const router = express.Router();

const controller = require('../controllers/controller')

router.get('/', controller.welcome)
router.get('/tests', controller.getTests)
router.get('/test/:id', controller.getTest)
router.post('/results', controller.getResult)
router.post('/edit_test_name', controller.editTestName)

module.exports = router;
