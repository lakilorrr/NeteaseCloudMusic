import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '../pages/discover/children-pages/recommend/store'
import { reducer as playerReducer } from '../pages/player/store/index'
import { toplistReducer } from '../pages/discover/children-pages/toplist/store'

const cReducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer,
    toplist: toplistReducer
})

export default cReducer
