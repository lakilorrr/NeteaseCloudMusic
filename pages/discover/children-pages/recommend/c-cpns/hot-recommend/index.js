import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import SongsCover from '@/components/songs-cover'
import { getHotRecommendAction } from '../../store/actionCreators'

import { HOT_RECOMMEND_LIMIT } from '@/common/constants'

import { RecommendWrapper } from './style'

export default memo(function HotRecommend() {
    const state = useSelector(
        state => ({
            hotRecommends: state.getIn(['recommend', 'hotRecommends'])
        }),
        shallowEqual
    )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
    }, [dispatch])

    return (
        <RecommendWrapper>
            <ThemeHeaderRCM title='热门推荐' keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
            <div className='recommend-list'>
                {state.hotRecommends.map((item, index) => {
                    return <SongsCover key={item.id} info={item} />
                })}
            </div>
        </RecommendWrapper>
    )
})
