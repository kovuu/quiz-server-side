const db = require('../models')
const Tests = db.Test;
const Questions = db.Question
const Answers = db.Answer
const Results = db.Result
const AnswerToTags = db.AnswersToTag
const ResultToTags = db.ResultToTags
const ResultsToImage = db.ResultsToImage
const Images = db.Image
const Tags = db.Tag

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
        if (counter / tagsOfResult.length >= process.env.THRESHOLD) {
            tagMatchRatio[key] = counter / tagsOfResult.length
        }
        counter = 0
    }



    let suitableResults = []

    let result = [];
    if (Object.keys(tagMatchRatio).length !== 0) {
        let maxNumber = 0;
        for (let key in tagMatchRatio) {
            if (tagMatchRatio[key] > maxNumber) {
                suitableResults = []
                maxNumber = tagMatchRatio[key]
                suitableResults.push(key)
            } else if (tagMatchRatio[key] === maxNumber) {
                suitableResults.push(key)
            }
        }


        for (let suitableResult of suitableResults) {
            let singleResult = {}



            await Results.findOne({
                where: {
                    id: suitableResult
                },
                attributes: ['test_id',  'description'],
                raw: true
            }).then(async r => {
                singleResult = {...r}
                ResultsToImage.belongsTo(Images, {foreignKey: 'image_id', targetKey: 'id'})
                Images.hasOne(ResultsToImage, {foreignKey: 'image_id'})
                await Images.findAll({
                    include: {
                        model: ResultsToImage,
                        as: ['resultToImage'],
                        where: {
                            result_id: suitableResult
                        },
                        attributes: []
                    },
                    attributes: ['imageLink'],
                    raw: true
                }).then(r => {
                    singleResult.imagesLinks = r
                })

            })
            result.push(singleResult)
        }
    } else {
            let singleObject = {}
            await Results.findOne({
                where: {
                    description: 'No matching results'
                },
                attributes: ['id', 'description'],
                raw: true
            }).then(async r => {
                singleObject = {...r}
                ResultsToImage.belongsTo(Images, {foreignKey: 'image_id', targetKey: 'id'})
                Images.hasOne(ResultsToImage, {foreignKey: 'image_id'})
                await Images.findAll({
                    include: {
                        model: ResultsToImage,
                        as: ['resultToImage'],
                        where: {
                            result_id: singleObject.id
                        },
                        attributes: []
                    },
                    attributes: ['imageLink'],
                    raw: true
                }).then(images => {
                    singleObject.imagesLinks = images
                    result.push(singleObject)
                })

            })
            result[0].test_id = test_id


    }


    res.send(result)
}

controller.getTestData = async (req, res) => {
    const testId = req.params.id

    const tests = {}
    await Questions.findAll({
        where: {
            test_id: testId
        },
        raw: true,
    }).then(async r => {
        tests.questions = r
        const answersList = []
        for (let i = 0; i < tests.questions.length; i++) {
            await Answers.findAll({
                where: {
                    question_id: tests.questions[i].id
                },
                raw: true
            }).then(async r => {
                tests.questions[i].answers = r
                AnswerToTags.belongsTo(Tags, {foreignKey: 'tag_id', targetKey: 'id'})
                Tags.hasOne(AnswerToTags, {foreignKey: 'tag_id'})
                for (let j = 0; j < r.length; j++) {
                   await Tags.findAll({
                        include: {
                            model: AnswerToTags,
                            where: {
                                answer_id: tests.questions[i].answers[j].id
                            },
                            as: 'AnswersToTag',
                        },
                        raw: true
                    }).then(async r => {

                        tests.questions[i].answers[j].tags = r
                       ResultToTags.belongsTo(Results, {foreignKey: 'result_id', targetKey: 'id'})
                       Results.hasOne(ResultToTags, {foreignKey: 'result_id'})
                        for (let tag of r) {
                            await Results.findAll({
                                include: {
                                    model: ResultToTags,
                                    as: 'ResultToTag',
                                    where: {
                                        tag_id: tag.id
                                    }
                                },
                                raw: true
                            }).then(async r => {
                                tests.questions[i].answers[j].results = r

                            })
                        }
                    })

                }
            })

        }
    })
    await Results.findAll({
        where: {
            test_id: testId
        },
        raw: true
    }).then(async r => {
        tests.results = r
        console.log(tests.results)
        ResultsToImage.belongsTo(Images, {foreignKey: 'image_id', targetKey: 'id'})
        Images.hasOne(ResultsToImage, {foreignKey: 'image_id'})
        for (let i = 0; i < tests.results.length; i++) {
            await Images.findAll({
                include: {
                    model: ResultsToImage,
                    as: 'ResultsToImage',
                    include: [],
                    where: {
                        result_id: tests.results[i].id
                    }
                },
                attributes: ['id', 'imageLink'],
                raw: true,
            }).then(r => {
                tests.results[i].images = r
            })
        }
    })
    res.send(tests)
}

controller.addQuestionToTest = async (req, res) => {
    const question = req.body.question
    const answers = req.body.answers

    let order = await Questions.findOne({
        where: {
            test_id: req.params.id
        },
        raw: true,
        order: [
            ['order', 'desc']
        ],
        attributes: ['order'],
        limit: 1
    })
    order = order.order + 1

    const result = await Questions.create({
        order: order,
        test_id: req.params.id,
        text: question
    })
    const questionData = result.dataValues

    for (let answer of answers) {

        const props = {
            questionId: questionData.id,
            answerText: answer.text,
            answerResults: answer.results
        }

        await addAnswer(props)

       

    }

    res.send('200')
}

controller.addAnswerToQuestion = async (req, res) => {
    const props = {
        questionId: req.params.questionId,
        answerText: req.body.answer.text,
        answerResults: req.body.answer.results
    }

    await addAnswer(props)

    res.send('302')
}


const addAnswer = async (props) => {

    let result = await Answers.create({
        question_id: props.questionId,
        text: props.answerText
    })
    const answerResult = result.dataValues
    result = await Tags.create({
        name: props.answerText
    })

    const tagResult = result.dataValues


    await AnswerToTags.create({
        answer_id: answerResult.id,
        tag_id: tagResult.id
    })

    for (let result_id of props.answerResults) {
        await ResultToTags.create({
            tag_id: tagResult.id,
            result_id: result_id
        })
    }
}


controller.removeQuestionFromTest = async (req, res) => {
    const questionId = req.params.questionId

    let result = await Answers.findAll({
        where: {
            question_id: questionId
        },
        raw: true
    })
    const answersId = result.map(a => a.id)

    for (let answerId of answersId) {
       await  removeAnswer(answerId)
    }
    await Questions.destroy({
        where: {
            id: questionId
        }
    })

    res.send('300')
}

controller.removeAnswerFromQuestion = async (req, res) => {
    const answerId = req.params.answerId
    const testId = req.params.testId
    const questionId = req.params.questionId

    removeAnswer(answerId)


  

 

    res.send('300')
}

const removeAnswer = async (answerId) => {
    let result =  await AnswerToTags.findAll({
        where: {
            answer_id: answerId
        },
        raw: true,
        attributes: ['tag_id']
    })

    await AnswerToTags.destroy({
        where: {
            answer_id: answerId
        }
    }) 

    const tagIds = result.map(tag => tag.tag_id)
    for (let tagId of tagIds) {
        await ResultToTags.destroy({
            where: {
                tag_id: tagId
            }
        })
    }

    await Tags.destroy({
        where: {
            id: tagIds
        }
    })

    await Answers.destroy({
        where: {
            id: answerId
        }
    })


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

controller.editTestName = (req, res) => {
    Tests.update(
        {
            name: req.body.name
        },

        {silent: true, returning: true, where: {id: req.body.id}}
    ).then(r => {
        console.log('data was updated')
        res.send('ok!')
    }).catch(err => {
        console.log('Error: ' + err)
    })
}

controller.uploadImage = async (req, res) => {
    console.log(req)
    const result_id = req.params.container_id
    const imageLink = req.file.location
    let result = await Images.create({
        imageLink: imageLink
    })

    const imageId = result.dataValues.id
    await ResultsToImage.create({
        result_id: result_id,
        image_id: imageId
    })
    res.send('300')
}

controller.deleteImageFromResult = async (req, res) => {
    const result_id = req.params.result_id
    const image_id = req.params.image_id

    await ResultsToImage.destroy({
        where: {
            image_id: image_id,
            result_id: result_id
        }
    })

    res.send('200')
}

controller.deleteResultFromTest = async (req, res) => {
    const test_id = req.params.test_id
    const result_id = req.params.result_id

    await ResultToTags.destroy({
        where: {
            result_id: result_id
        }
    })

    await ResultsToImage.destroy({
        where: {
            result_id: result_id
        }
    })

    await Results.destroy({
        where: {
            id: result_id
        }
    })

    res.send('300')
}

controller.addResultToTest = async (req, res) => {
    const test_id = req.params.test_id
    await Results.create({
        test_id: test_id,
        description: req.body.label
    })


    res.send('200')
}


module.exports = controller;
