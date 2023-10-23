/** НЕ ИСПОЛЬЗОВАТЬ
 * @file getCurrentEntity.ts
 * @description Получает сущность по его имени и ID
 * @author Daniil Perevozchikov
 * @version 1.0
 * @date 20.10.2023
 */

import axios, { AxiosError } from "axios";
import { ContentType, reqData } from "../config";
import { unAuth, entityType } from "../types";

const getCurrentEntity = async (id: number, entityName: string): Promise<entityType> => {
    try {
        const fetch = await axios.get(`${reqData._DOMAIN}api/v4/leads`, {
            method: "GET",
            headers: {
                "Authorization": reqData._ACCESS_TOKEN,
                "Content-Type": ContentType
            },
        })
        return {
            id: fetch.data._embedded.leads.id,
            name: fetch.data._embedded.leads.name
        }
    } catch (e) {
        throw e;
    }
}

export default getCurrentEntity