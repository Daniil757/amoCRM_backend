/**
 * @description Данные для создания сервера и обращения к API amoCRM
 * @author Daniil Perevozchikov
 * @version 1.1
 */

import {reqDataType} from "./types"

export const 
    HOST        = '127.0.0.1',
    PORT        = 3500,
    X_CLIENT_ID = 11,
    ContentType = "application/json";

export let reqData:reqDataType = {
    _ACCESS_TOKEN:  '',
    _DOMAIN:        ''
}