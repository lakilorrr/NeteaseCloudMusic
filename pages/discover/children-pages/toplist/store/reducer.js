import { Map } from 'immutable'
import * as actionTypes from './constants'

const initialState = Map({
    lists: [],
    listdetail: {},
    currentid: 19723756,
    topcomments: {},
    newestcomments: {}
})

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LISTS:
            return state.set('lists', action.lists)
        case actionTypes.CHANGE_LIST_DETAIL:
            return state.set('listdetail', action.listdetail)
        case actionTypes.CHANGE_CURRENT_ID:
            return state.set('currentid', action.currentId)
        case actionTypes.CHANGE_TOP_COMMENT:
            return state.set('topcomments', action.topcomment)
        case actionTypes.CHANGE_NEWEST_COMMENT:
            return state.set('newestcomments', action.newestcomment)
        default:
            return state
    }
}
export default reducer
