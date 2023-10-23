/**
 * @description Описание методов для маршрутов
 * @author Daniil Perevozchikov
 * @version 1.1
 */
"use strict"
import axios, {AxiosError} from "axios";
import { Request, Response } from "express";
import * as response from '../response';
import { reqData, ContentType } from '../config';
import { unAuth } from "../types";
import { getToken } from "../functions/getToken";

/**
 * @description Добавление сущности
 */
export const createEntity = async (req: Request, res: Response) => {    
    try {
        let fetch = await axios.post(`${reqData._DOMAIN}api/v4/${req.body.entityType}`, [{}], {
            headers: {
                "Authorization": reqData._ACCESS_TOKEN,
                "Content-Type": ContentType
            }
        })
        const id = fetch.data._embedded[req.body.entityType][0].id;
        
        response.status(fetch.status, id, res);
    } catch (e) {
        const error = (e as AxiosError).response.data as unAuth;        
        if (error.status === 401) {
            response.status(error.status, error.detail, res);
            await getToken();
        } else {
            response.status(400, "Bad request", res);
            throw e;
        }
    }
}












// сделать выборку только по созданным в текущей сессии сделкам!!!
/** ХРАНИТЬ НА ФРОНТЕ
 * @description Получение сделок созданных в текущей сессии
 */ 
// export const entities = async (req: Request, res: Response) => {
//     let dataEntities: entityType[] = [];
//     for (let entity in entitiesStorage) {
//         console.log(`${entity} - ${entitiesStorage[entity]}`);
//         entitiesStorage[entity].forEach(async (id: number) => {
//             try {
//                 let response = await getCurrentEntity(id, entity);
//                 dataEntities.push()
//             } catch (e) {
//                 const error = (e as AxiosError).response.data as unAuth;
//                 if (error.detail) {
//                     response.status(error.status, error.detail, res)
//                 } else {
//                     response.status(400, "Ошибка при получении заказов", res)
//                 }
//             }
//         })
//     }
// }