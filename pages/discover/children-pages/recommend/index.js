import React, { memo } from 'react'
import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RecommendRanking from './c-cpns/recommend-ranking'

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'

function NBRecommend(props) {
    return (
        <RecommendWrapper>
            <TopBanner />
            <Content className='wrap-v2'>
                <RecommendLeft>
                    <HotRecommend />
                    <NewAlbum />
                    <RecommendRanking />
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}
export default memo(NBRecommend)
