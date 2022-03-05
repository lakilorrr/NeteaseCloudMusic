import request from './axios'

export function getLists() {
    return request({
        url: '/toplist'
    })
}

// 获取榜单详情
export function getListDetail(id) {
    return request({
        url: '/playlist/detail',
        params: {
            id
        }
    })
}
export function getNewestComment(id, offset) {
    return request({
        url: '/comment/playlist',
        params: {
            id: id,
            offset: offset,
            limit: 20
        }
    })
}

export function getTopComment(id) {
    return request({
        url: '/comment/new',
        params: {
            id: id,
            pageSize: 15,
            type: 2
        }
    })
}
