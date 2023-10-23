/**
 * @file index.ts
 * @description Описание дополнительных типов
 * @author Daniil Perevozchikov
 * @version 1.0
 * @date 20.10.2023
 */


/**
 * @description Структура ответа при неверном токене
 */
export type unAuth = {
    title: string,
    type: string,
    status: number,
    detail: string
}

/**
 * @description Структура reqData
 */
export type reqDataType = {
    _ACCESS_TOKEN:  string,
    _DOMAIN:        string
}

/**
 * @description Структура сущности
 */
export type entityType = {
    id: number,
    name: string
}

/**
 * @description Структура хранилища сущностей
 */
export type entitiesStorageType = {
    leads: Array<number>,
    contacts: Array<number>,
    companies: Array<number>
}