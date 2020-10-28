const db = require('../models')
const Tests = db.Test;
const Questions = db.Question
const Answers = db.Answer
const Results = db.Result
const AnswerToTags = db.AnswersToTag
const ResultToTags = db.ResultToTags

const controller = {}

controller.welcome = (req, res) => {
    res.send('Hello world!')
}

controller.getTests = (req, res) => {
    Tests.findAll({
        raw: true
    }).then(r => {
        res.send(r)
    }).catch(err => console.log('Erorr ' + err))
}

controller.getTest = (req, res) => {
    const testId = req.params.id

    Questions.findAll({
        where: {
            test_id: testId
        },
        raw: true,
        order: [
            ['order', 'ASC']
        ],
        attributes: ['id', 'order', 'text']
    }).then(async r => {
        let questions = r
        for (let question of questions) {
            await Answers.findAll({
                where: {
                    question_id: question.id
                },
                raw: true,
                attributes: ['id', 'text']
            }).then(answers => {
                question.answers = answers;
            }).catch(err => console.log('Error: ' + err))
        }
        res.send(questions);
    }).catch(err => console.log('Error: ' + err))
}

controller.getResult = async (req, res) => {

    const answers = []
    for (let answerId of JSON.parse(req.body.answers)) {
        answers.push(Number(answerId))
    }

    const test_id = await getTestId(answers)
    const resultsId = await getResultsId(test_id)
    const tagsOfResults = await getTagsOfResults(resultsId)
    const answersTagsId = await getTagsOfAnswers(answers)

    let counter = 0

    let tagMatchRatio = {}

    for (let key in tagsOfResults) {
        const tagsOfResult = tagsOfResults[key]
        for (let answerTagId of answersTagsId) {
            if (tagsOfResult.find(id => id === answerTagId)) {
                counter++
            }
        }
        if (counter / tagsOfResult.length >= 0.8) {
            tagMatchRatio[key] = counter / tagsOfResult.length
        }
        counter = 0
    }



    let suitableResult = []

    let result;
    console.log(tagMatchRatio.length)
    if (Object.keys(tagMatchRatio).length !== 0) {
        let maxNumber = 0;
        for (let key in tagMatchRatio) {
            if (tagMatchRatio[key] > maxNumber) {
                suitableResult = []
                maxNumber = tagMatchRatio[key]
                suitableResult.push(key)
            } else if (tagMatchRatio[key] === maxNumber) {
                suitableResult.push(key)
            }
        }

        await Results.findAll({
            where: {
                id: suitableResult
            },
            attributes: ['test_id', 'imageLink', 'description'],
            raw: true
        }).then(r => result = r)
    } else {
            await Results.findAll({
                where: {
                    id: 13
                },
                attributes: ['imageLink', 'description'],
                raw: true
            }).then(r => result = r)
            result[0].test_id = test_id


    }

    res.send(result)
}

const getTestId = async (answers) => {
    let test_id;
    await Answers.findOne({
        where: {
            id: answers[0]
        },
        attributes: ['question_id'],
        raw: true
    }).then(async r => {
        await Questions.findOne({
            where: {
                id: r.question_id
            },
            attributes: ['test_id'],
            raw: true
        }).then(r => test_id = r.test_id)
    })
    return test_id
}

const getResultsId = async (test_id) => {
    const resultsId = []
    await Results.findAll({
        where: {
            test_id: test_id
        },
        attributes: ['id'],
        raw: true
    }).then(r => {
        for (let resultId of r) {
            resultsId.push(resultId.id)
        }
    })
    console.log(resultsId)
    return resultsId
}



const getTagsOfResults = async (resultsId) => {
    const tagsOfResults = {}
    for (let resultId of resultsId) {
        const ids = []
        await  ResultToTags.findAll({
            where: {
                result_id: resultId
            },
            attributes: ['tag_id'],
            raw: true
        }).then(r => {
            for (let tagId of r) {
                ids.push(tagId.tag_id)
            }
        })
        tagsOfResults[resultId] = ids
    }
    return tagsOfResults
}

const getTagsOfAnswers = async (answersId) => {
    const answersTagsId = []
    for (let answerId of answersId) {
        await AnswerToTags.findAll({
            where: {
                answer_id: answerId
            },
            attributes: ['tag_id'],
            raw: true
        }).then(r => {
            for (let answerTagId of r) {
                answersTagsId.push(answerTagId.tag_id)
            }
        })
    }
    return answersTagsId
}


module.exports = controller;