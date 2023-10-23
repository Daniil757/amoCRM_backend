/**
 * @description Главный файл
 * @author Daniil Perevozchikov
 * @version 1.1
 */

import express from 'express'
const app = express()
import {PORT, HOST} from './config'
import routes from './settings/routes'
import cors from "cors"
import bodyParser from 'body-parser'

const whitelist = ['http://localhost:5173']; // подключение по http, для работы на локальнйо машине создадим белый список
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
};

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

routes(app)

app.listen(PORT, HOST, () => {
    console.log('Работает');
})