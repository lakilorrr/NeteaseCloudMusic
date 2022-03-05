import { getSongDetail, getSongLrc } from '@/services/player'
import * as actionTypes from './constants'
import { parseLrc } from '@/utils/parse-lyc'

const changeCurrentSongAction = currentSong => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
})

const changeCurrentSongIndexAction = currentSongIndex => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex
})

const changePlayListAction = playList => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
})

const changeLrcListAction = lrcList => ({
    type: actionTypes.CHANGE_LYRIC_LIST,
    lrcList
})

export const changePlayOrderAction = playOrder => ({
    type: actionTypes.CHANGE_PLAY_ORDER,
    playOrder
})

export const changePrevAndNextButton = tag => {
    return (dispatch, getState) => {
        const order = getState().getIn(['player', 'playOrder'])
        let currentSongIndex = getState().getIn(['player', 'currentSongIndex'])
        const playList = getState().getIn(['player', 'playList'])
        switch (order) {
            case 1:
                let randomIndex = Math.floor(Math.random().playList.length)
                while (currentSongIndex === randomIndex) {
                    randomIndex = Math.floor(Math.random().playList.length)
                }
                currentSongIndex = randomIndex
                break

            default:
                currentSongIndex += tag
                if (currentSongIndex >= playList.length) currentSongIndex = 0
                if (currentSongIndex < 0) currentSongIndex = playList.length - 1
                break
        }
        const currentSong = playList[currentSongIndex]
        dispatch(changeCurrentSongAction(currentSong))
        dispatch(changeCurrentSongIndexAction(currentSongIndex))
    }
}

export const changeLrcIndexAction = idx => ({
    type: actionTypes.CHANGE_LYRIC_INDEX,
    idx
})

export const getSongDetailAction = ids => {
    return (dispatch, getState) => {
        const playList = getState().getIn(['player', 'playList'])
        const songIndex = playList.findIndex(song => song.id === ids)
        let song = null
        if (songIndex !== -1) {
            dispatch(changeCurrentSongIndexAction(songIndex))
            song = playList[songIndex]
            dispatch(changeCurrentSongAction(song))
            dispatch(getLyricAction(song.id))
        } else {
            getSongDetail(ids).then(res => {
                song = res.songs && res.songs[0]
                if (!song) return
                const newList = [...playList]
                newList.push(song)
                dispatch(changePlayListAction(newList))
                dispatch(changeCurrentSongIndexAction(newList.length - 1))
                dispatch(changeCurrentSongAction(song))
                dispatch(getLyricAction(ids))
            })
        }
    }
}

export const getLyricAction = id => {
    return dispatch => {
        getSongLrc(id).then(res => {
            const lrc = res.lrc.lyric
            console.log(lrc)
            const lrcList = parseLrc(lrc)
            dispatch(changeLrcListAction(lrcList))
        })
    }
}
