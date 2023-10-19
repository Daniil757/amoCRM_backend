"use strict";

module.exports = async (app) => {
    const axios = require('axios')
    const { ContentType, X_CLIENT_ID } = require('../config')
    const {getToken} = require('../functions/getToken') 
    const {deals} = require('../Controller/DealController')
    let _ACCESS_TOKEN = ''

    if (_ACCESS_TOKEN === '') {
        const data = await getToken()
        _ACCESS_TOKEN = data.ACCESS_TOKEN
        console.log('change');
    }

    app.get("/leads", deals)
}