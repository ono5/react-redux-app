// application内に存在する全てのreducerを管理するファイル
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })
// export default combineReducers({ foo, bar, dar })