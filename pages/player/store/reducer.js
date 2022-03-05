import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
    currentSong: {},
    playList: [],
    currentSongIndex: 0,
    playOrder: 0,
    lrcList: [],
    lrcIndex: 0
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set('currentSong', action.currentSong)
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set('currentSongIndex', action.currentSongIndex)
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set('playList', action.playList)
        case actionTypes.CHANGE_PLAY_ORDER:
            return state.set('playOrder', action.playOrder)
        case actionTypes.CHANGE_LYRIC_LIST:
            return state.set('lrcList', action.lrcList)
        case actionTypes.CHANGE_LYRIC_INDEX:
            return state.set('lrcIndex', action.idx)
        default:
            return state
    }
}

export default reducer
