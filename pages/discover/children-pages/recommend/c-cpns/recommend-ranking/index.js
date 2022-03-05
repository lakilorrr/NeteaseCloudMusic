import React, { memo, useEffect } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

import { getTopListAction } from '@/pages/discover/children-pages/recommend/store/actionCreators'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import TopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'

export default memo(function RecommendRanking() {
    const state = useSelector(
        state => ({
            upRankings: state.getIn(['recommend', 'upRankings']),
            newRankings: state.getIn(['recommend', 'newRankings']),
            originRankings: state.getIn(['recommend', 'originRankings'])
        }),
        shallowEqual
    )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopListAction(19723756))
        dispatch(getTopListAction(3779629))
        dispatch(getTopListAction(2884035))
    }, [dispatch])

    return (
        <RankingWrapper>
            <ThemeHeaderRCM title='榜单' />
            <div className='tops'>
                <TopRanking info={state.upRankings}></TopRanking>
                <TopRanking info={state.newRankings}></TopRanking>
                <TopRanking info={state.originRankings}></TopRanking>
            </div>
        </RankingWrapper>
    )
})
