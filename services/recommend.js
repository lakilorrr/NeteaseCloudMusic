import request from './axios'

export function getTopBanner() {
    return request({
        url: '/banner'
    })
}

export function getHotRecommend(limit) {
    return request({
        url: '/personalized',
        params: { limit }
    })
}

export function getNewAlbum() {
    return request({
        url: '/album/newest'
    })
}

export function getTopList(id) {
    return request({
        url: '/playlist/detail',
        params: { id }
    })
}
