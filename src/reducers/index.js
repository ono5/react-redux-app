// application内に存在する全てのreducerを管理するファイル
import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
// export default combineReducers({ foo, bar, dar })