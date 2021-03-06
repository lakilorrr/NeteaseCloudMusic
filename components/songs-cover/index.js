import React, { memo } from 'react'

import { SongsCoverWrapper } from './style'

import { getSizeImage, getCount } from '@/utils/format-utils'

export default memo(function SongsCover(props) {
    const { info } = props

    return (
        <SongsCoverWrapper>
            <div className='cover-top'>
                <img src={getSizeImage(info.picUrl, 140)} />
                <div className='cover sprite_cover'>
                    <div className='info sprite_cover'>
                        <span>
                            <i className='sprite_icon erji'></i>
                            {getCount(info.playCount)}
                        </span>
                        <i className='sprite_icon play'></i>
                    </div>
                </div>
            </div>
            <div className='cover-bottom text-nowrap'>{info.name}</div>
            <div className='cover-source'>by {info.copywriter}</div>
        </SongsCoverWrapper>
    )
})
