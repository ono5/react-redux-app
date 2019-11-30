import _ from 'lodash'
import {
    READ_EVENTS,
    DELETE_EVENTS,
    READ_EVENT,
    UPDATE_EVENT
 } from '../actions'


export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
        case UPDATE_EVENT:
            // console.log(action.response.data)
            // console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')
        case READ_EVENT:
            const data = action.response.data
            console.log(action.response.data)
            // {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
            // dataのidをキーにしたデータの情報を更新する
            return { ...events, [data.id]: data }
        case DELETE_EVENTS:
            console.log(action.id)
            // event情報をメモリ上から削除する
            delete events[action.id]
            // 新しいメモリ情報をリターンする
            return { ...events }
        default:
            return events
    }
} 