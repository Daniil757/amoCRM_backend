"use strict"
const axios = require("axios")
let { DOMAIN, ACCESS_TOKEN, ContentType, X_CLIENT_ID } = require('../config')
const { getToken } = require('../functions/getToken')
const response = require('../response')

exports.deals = async (req, res) => {
    // await getToken(req, res);
    // console.log(_DOMAIN);
    try {
        const fetch = await axios.default.get(`d6757be6f1101.amocrm.ru/api/v4/leads?limit=10`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc0YTNlZThjM2Y3YjczNzA0OGJhZWFlMjBkZTZkMTRjZjBjMDAzNzIxNGMwZmM4YWI0OGY1OTNmZDMxODkyOWJjZmQyMWJhNDAzYTJhMDQyIn0.eyJhdWQiOiIxNGQzYmNmZS04MDVkLTRmMzYtYWI1My0xNTE0ZWE0YjhjNGEiLCJqdGkiOiI3NGEzZWU4YzNmN2I3MzcwNDhiYWVhZTIwZGU2ZDE0Y2YwYzAwMzcyMTRjMGZjOGFiNDhmNTkzZmQzMTg5MjliY2ZkMjFiYTQwM2EyYTA0MiIsImlhdCI6MTY5NzcyMzY5MSwibmJmIjoxNjk3NzIzNjkxLCJleHAiOjE2OTc4MTAwOTEsInN1YiI6IjczODA4ODMiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MzEzMzQ0NjYsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6MSwic2NvcGVzIjpbImNybSJdfQ.lpbdQ0RNx3nAF9he9eiZcCmo-t1mOuy2HLxfh8kbNC3QjfoWH2lNJp9gL5NEOdFBQ66t3Ds0Mkb7Tia9aHRXoiwdQPlJe4SvfuV0igbJyHn_dy0VPeE5ZAwt_bUYLQm1FLSZVghcLYQyKJcppGoKymv5Bo_lPRTABUvjtVEiBhaH6DgMOojA6Ys1F3RHBwe3HDZ5qTkC-zL_y_DivF9hNQSoOmehvaI8Fs44n66vq1wZKEF4Yf2FQT90ic4XIe9YXrz2yGxngwZu-MCwCCKmbPjhQ5HlGgAlBpVreZ7F7EEmFWRs7eoG34Xn3YEau9cSGZAhRI-kHXgtUSed0aHg0g",
                "Content-Type": "application/json"
            },
        })
        response.status(200, "fetch.data", res)
    } catch (error) {
        response.status(400, "Ошибка при получении заказов", res)
    }
}

exports.createDeal = async (req, res) => {

}