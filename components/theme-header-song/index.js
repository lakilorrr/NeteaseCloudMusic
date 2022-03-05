import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { HeaderWrapper } from './style'
import { memo } from 'react'

export default memo(function HeaderSong() {
    // redux
    const state = useSelector(
        state => ({
            listdetail: state.getIn(['toplist', 'listdetail'])
        }),
        shallowEqual
    )

    return (
        <HeaderWrapper>
            <div className='left'>
                <h3 className='title'>歌曲列表</h3>
                <div className='count'>{state.listdetail.trackCount}首歌</div>
            </div>
            <div className='right'>
                <span>播放：</span>
                <span className='count'>{state.listdetail.playCount}</span>
                <span>次</span>
            </div>
        </HeaderWrapper>
    )
})
