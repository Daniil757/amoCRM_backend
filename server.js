const express = require('express')
const axios = require('axios')
const app = express()
const config = require('./config')

const routes = require('./settings/routes')
routes(app)

app.listen(config.PORT, config.HOST, () => {
    console.log('Работает');
})