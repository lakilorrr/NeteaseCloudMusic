import * as actionTypes from './constants'
import { getListDetail, getLists, getNewestComment, getTopComment } from '@/services/ranking'

const changeLists = res => ({
    type: actionTypes.CHANGE_LISTS,
    lists: res.list
})
export const getListsAction = () => {
    return dispatch => {
        getLists().then(res => dispatch(changeLists(res)))
    }
}
const changeListDetail = res => ({
    type: actionTypes.CHANGE_LIST_DETAIL,
    listdetail: res.playlist
})
export const getListDetailAction = id => {
    return dispatch => {
        getListDetail(id).then(res => dispatch(changeListDetail(res)))
    }
}

export const changeCurrentIdAction = id => ({
    type: actionTypes.CHANGE_CURRENT_ID,
    currentId: id
})

const changeTopComment = res => ({
    type: actionTypes.CHANGE_TOP_COMMENT,
    topcomment: res.data
})
export const getTopCommentAction = id => {
    return dispatch => {
        getTopComment(id).then(res => dispatch(changeTopComment(res)))
    }
}
const changeNewesComment = res => ({
    type: actionTypes.CHANGE_NEWEST_COMMENT,
    newestcomment: res
})
export const getNewestCommentAction = (id, offset) => {
    return dispatch => {
        getNewestComment(id, offset).then(res => dispatch(changeNewesComment(res)))
    }
}
