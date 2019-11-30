import _ from 'lodash'
import { 
    READ_EVENTS,
    DELETE_EVENTS
 } from '../actions'


export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            // console.log(action.response.data)
            // console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')
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