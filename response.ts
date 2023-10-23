/**
 * @description Возвращает ответ одинаковой структуры на каждый запрос к API
 * @author Daniil Perevozchikov
 * @version 1.1
 */

'use strict'
import { Response } from "express"
export let status = (status: number, values: String | Object, res: Response) => {
    const data = {
        status,
        values
    }

    res.status(data.status)
    res.json(data),
    res.end()
}