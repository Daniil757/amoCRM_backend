/**
 * @description Функция получает и сохраняет токен и домен
 * @author Daniil Perevozchikov
 * @version 1.1
 */

"use strict"
import { reqData } from "../config"; 

export const getToken = async () => {
    const { ContentType, X_CLIENT_ID } = require('../config')
    const axios = require("axios")
    try {
        const fetch = await axios.default.get("https://test.gnzs.ru/oauth/get-token.php", {
            method: "GET",
            headers: {
                "Content-Type": ContentType,
                "X-Client-Id": X_CLIENT_ID
            }
        })
        reqData._ACCESS_TOKEN = `Bearer ${fetch.data.access_token}`;
        reqData._DOMAIN = `https://${fetch.data.base_domain}/`
    } catch (error) {
        reqData._ACCESS_TOKEN = '';
        reqData._DOMAIN = '';
    }
}

