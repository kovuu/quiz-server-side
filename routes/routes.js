const express = require('express')
const router = express.Router();
const upload = require('../config/multer')


const controller = require('../controllers/controller')


router.get('/', controller.welcome)
router.get('/tests', controller.getTests)
router.get('/test/:id', controller.getTest)
router.post('/results', controller.getResult)
router.post('/edit_test_name', controller.editTestName)
router.get('/test/:id/data', controller.getTestData)
router.post('/test/:id/add', controller.addQuestionToTest) 
router.post('/test/:testId/question/:questionId/add', controller.addAnswerToQuestion)
router.delete('/test/:testId/question/:questionId/answer/:answerId/remove', controller.removeAnswerFromQuestion)
router.delete('/test/:testId/question/:questionId/remove', controller.removeQuestionFromTest)
router.post('/upload_image/container/:container_id', upload.single('image'), controller.uploadImage)
router.delete('/result/:result_id/image/:image_id/remove', controller.deleteImageFromResult)
router.delete('/test/:test_id/result/:result_id/remove', controller.deleteResultFromTest)
router.post('/test/:test_id/result/add', controller.addResultToTest)



module.exports = router;
