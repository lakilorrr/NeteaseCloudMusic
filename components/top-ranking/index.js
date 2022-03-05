import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { getSizeImage } from '@/utils/format-utils'
import { getSongDetailAction } from '@/pages/player/store'

import { TopRankingWrapper } from './style'

export default memo(function TopRanking(props) {
    const { info } = props
    const { tracks = [] } = info

    const dispatch = useDispatch()
    const playMusic = item => {
        dispatch(getSongDetailAction(item.id))
    }

    return (
        <TopRankingWrapper>
            <div className='header'>
                <div className='image'>
                    <img src={getSizeImage(info.coverImgUrl)} alt='' />
                    <a href='#' className='image_cover'>
                        rankingcover
                    </a>
                </div>
                <div className='info'>
                    <a href='#'>{info.name}</a>
                    <div>
                        <button className='btn play sprite_02'></button>
                        <button className='btn favor sprite_02'></button>
                    </div>
                </div>
            </div>
            <div className='list'>
                {tracks.slice(0, 10).map((item, index) => {
                    return (
                        <div className='list-item'>
                            <div className='rank'>{index + 1}</div>
                            <div className='info'>
                                <a href='#' className='name text-nowrap'>
                                    {item.name}
                                </a>
                                <div className='operate'>
                                    <button className='btn play sprite_02' onClick={e => playMusic(item)}></button>
                                    <button className='btn addto sprite_icon2'></button>
                                    <button className='btn favor sprite_02'></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='footer'>
                <a href='#'>查看全部 &gt;</a>
            </div>
        </TopRankingWrapper>
    )
})
