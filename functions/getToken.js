"use strict"

const { ContentType, X_CLIENT_ID } = require('../config')
let { ACCESS_TOKEN, DOMAIN} = require('../config')
const axios = require("axios")
const response = require("../response")

// exports.getToken = (app) => {
//     app.get("/get_token", async (req, res) => {
//         try {
//             const fetch = await axios.default.get("https://test.gnzs.ru/oauth/get-token.php", {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": ContentType,
//                     "X-Client-Id": X_CLIENT_ID
//                 }
//             })
//             ACCESS_TOKEN = `Bearer ${fetch.data.access_token}`;
//             DOMAIN = `${fetch.data.base_domain}/`
//             response.status(200, fetch.data, res)
//         } catch (error) {
//             response.status(400, "Ошибка при получении токена", res)
//         }
//     })
// }

exports.getToken = async (req, res) => {
    try {
        const fetch = await axios.default.get("https://test.gnzs.ru/oauth/get-token.php", {
            method: "GET",
            headers: {
                "Content-Type": ContentType,
                "X-Client-Id": X_CLIENT_ID
            }
        })
        // ACCESS_TOKEN = `Bearer ${fetch.data.access_token}`;
        // DOMAIN = `${fetch.data.base_domain}/`
        return {
            ACCESS_TOKEN: `Bearer ${fetch.data.access_token}`,
            DOMAIN: `${fetch.data.base_domain}/`
        }
    } catch (error) {
        response.status(400, "Ошибка при получении токена", res)
    }
}

