// application内に存在する全てのreducerを管理するファイル
import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })
// export default combineReducers({ foo, bar, dar })