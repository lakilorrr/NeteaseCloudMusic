import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getListDetailAction } from '../../store/actionCreators'
import SongOperationBar from '@/components/SongOperationBar'
import { formatMonthDay } from '@/utils/format-utils'
import { HeaderWrapper } from './style'

export default memo(function ListHeader() {
    const state = useSelector(
        state => ({
            lists: state.getIn(['Ranking', 'lists']),
            listdetail: state.getIn(['Ranking', 'listdetail']),
            currentid: state.getIn(['Ranking', 'currentid'])
        }),
        shallowEqual
    )
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListDetailAction(state.currentid))
    }, [dispatch, state.currentid])
    const updateFrequency = idx => {
        for (let item of state.lists) {
            if (item.id === idx) return item.updateFrequency
        }
    }

    return (
        <HeaderWrapper>
            <div className='image'>
                <img src={state.listdetail.coverImgUrl} alt='' />
                <span className='image_cover'>封面</span>
            </div>
            <div className='info'>
                <div className='title'>{state.listdetail.name}</div>
                <div className='time'>
                    <i className='clock sprite_icon2'></i>
                    <div>最近更新：{formatMonthDay(state.listdetail.updateTime)}</div>
                    <div className='update-f'>（{updateFrequency(state.currentid)}）</div>
                </div>
                <SongOperationBar
                    favorTitle={`(${state.listdetail.subscribedCount})`}
                    shareTitle={`(${state.listdetail.shareCount})`}
                    downloadTitle='下载'
                    commentTitle={`(${state.listdetail.commentCount})`}
                    listIds={`${state.listdetail.trackIds}`}
                />
            </div>
        </HeaderWrapper>
    )
})
