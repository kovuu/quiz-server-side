const multer = require('multer');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

let s3 = new aws.S3({apiVersion: "latest"})

const PATH = './data/img';
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, PATH);
    },
    filename: (req, file, cb) => {
        console.log(file.mimetype);
        cb(null, file.fieldname + '-' + Date.now() + '.' +file.mimetype.split('/')[1]);
    },
})


let upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'quiz-test-2233',
        acl: 'public-read',
        contentType: function (req, file, cb) {
            cb(null, 'image/png');
        },
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    })
})

module.exports = upload;