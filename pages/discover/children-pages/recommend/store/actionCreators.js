import * as actionTypes from './constants'

import { getTopBanner, getHotRecommend, getNewAlbum } from '@/services/recommend'
import { getTopList } from '../../../../../services/recommend'

const changeTopBannerAction = res => ({
    type: actionTypes.CHANGE_TOP_BANNER,
    topBanners: res.banners
})

const changeHotRecommendAction = res => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
})

const changeNewAlbumAction = res => ({
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbums: res.albums
})

const changeUpRankingAction = res => ({
    type: actionTypes.CHANGE_UP_RANKING,
    upRankings: res.playlist
})
const changeNewRankingAction = res => ({
    type: actionTypes.CHANGE_NEW_RANKING,
    newRankings: res.playlist
})
const changeOriginRankingAction = res => ({
    type: actionTypes.CHANGE_ORIGIN_RANKING,
    originRankings: res.playlist
})

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanner().then(res => {
            dispatch(changeTopBannerAction(res))
        })
    }
}

export const getHotRecommendAction = limit => {
    return dispatch => {
        getHotRecommend(limit).then(res => {
            dispatch(changeHotRecommendAction(res))
        })
    }
}

export const getNewAlbumAction = () => {
    return dispatch => {
        getNewAlbum().then(res => {
            dispatch(changeNewAlbumAction(res))
        })
    }
}

export const getTopListAction = id => {
    return dispatch => {
        getTopList(id).then(res => {
            switch (id) {
                case 19723756:
                    return dispatch(changeUpRankingAction(res))
                case 3779629:
                    return dispatch(changeNewRankingAction(res))
                case 2884035:
                    return dispatch(changeOriginRankingAction(res))
                default:
                    break
            }
        })
    }
}
