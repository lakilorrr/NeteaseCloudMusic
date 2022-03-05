import React, { memo } from 'react'

import { OperationBarWrapper } from './style'

export default memo(function SongOperationBar(props) {
    const { favorTitle, shareTitle, downloadTitle, commentTitle, listIds } = props

    return (
        <OperationBarWrapper>
            <span className='play'>
                <span className='play-icon sprite_button'>
                    <span className='play sprite_button'>
                        <i className='sprite_button'></i>
                        <span>播放</span>
                    </span>
                </span>
                <span className='add-icon sprite_button'>+</span>
            </span>
            <span className='item sprite_button'>
                <i className='icon favor-icon sprite_button'>{favorTitle}</i>
            </span>
            <span className='item sprite_button'>
                <i className='icon share-icon sprite_button'>{shareTitle}</i>
            </span>
            <span className='item sprite_button'>
                <i className='icon download-icon sprite_button'>{downloadTitle}</i>
            </span>
            <span className='item sprite_button'>
                <i className='icon comment-icon sprite_button'>{commentTitle}</i>
            </span>
        </OperationBarWrapper>
    )
})
