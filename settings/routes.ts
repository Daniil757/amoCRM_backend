/**
 * @description Определение маршрутов для API
 * @author Daniil Perevozchikov
 * @version 1.1
 */
"use strict";
import { Express } from "express";
import { reqData } from '../config';
import { getToken } from '../functions/getToken'
import { createEntity } from '../Controller/MainController'


export default async (app: Express) => {
    if (reqData._ACCESS_TOKEN === '') {
        await getToken();
    } 

    /** 
     * @description Создание сущности
     */
    app.post("/create", createEntity)





    // /**
    //  * @description Получение текущих сделок
    //  */
    // app.get("/leads", entities);
}