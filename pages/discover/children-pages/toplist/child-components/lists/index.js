import React, { memo } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { changeCurrentIdAction } from '../../store/actionCreators'
import { getSizeImage } from '@/utils/format-utils'
import { ListsWrapper } from './style'

export default memo(function Lists() {
    const state = useSelector(
        state => ({
            lists: state.getIn(['Ranking', 'lists']),
            currentid: state.getIn(['Ranking', 'currentid'])
        }),
        shallowEqual
    )
    const dispatch = useDispatch()

    const handleIdx = id => {
        dispatch(changeCurrentIdAction(id))
    }

    const listItem = item => {
        return (
            <div className={`item ${item.id === state.currentid ? 'active' : ''}`} onClick={e => handleIdx(item.id)}>
                <img src={getSizeImage(item.coverImgUrl, 40)} alt='' />
                <div className='info'>
                    <div className='name'>{item.name}</div>
                    <div className='update'>{item.updateFrequency}</div>
                </div>
            </div>
        )
    }
    const listFrag = (title, lists, start, end) => {
        return (
            <div id={lists.id}>
                <div className='header'>{title}</div>
                {state.lists.slice(start, end).map((item, idx) => {
                    return listItem(item)
                })}
            </div>
        )
    }
    return (
        <ListsWrapper>
            {listFrag('云音乐特色榜', state.lists, 0, 4)}
            {listFrag('全球媒体榜', state.lists, 4, -1)}
        </ListsWrapper>
    )
})
