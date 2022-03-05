import React, { memo } from 'react'

import { AlbumWrapper } from './style'

import { getSizeImage } from '@/utils/format-utils'

export default memo(function AlbumCover(props) {
    const { info, width = 118, bgp = '-570px', size = 100 } = props

    return (
        <AlbumWrapper width={width} bgp={bgp} size={size}>
            <div className='album-image'>
                <img src={getSizeImage(info.picUrl, size)} alt='' />
                <a href='#' className='cover image_cover'>
                    {info.name}
                </a>
            </div>
            <div className='album-info'>
                <div className='name text-nowrap'>{info.name}</div>
                <div className='artist text-nowrap'>{info.artist.name}</div>
            </div>
        </AlbumWrapper>
    )
})
