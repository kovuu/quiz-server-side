const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes/routes')
const parser = require('body-parser');

app.use(cors())
app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())
app.use('/', routes)

app.listen(process.env.PORT || 4000, () => {
    console.log('Server starting')
})

module.exports = app;
