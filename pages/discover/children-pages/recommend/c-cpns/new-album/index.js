import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getNewAlbumAction } from '../../store/actionCreators'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import AlbumCover from '@/components/album-cover'

import { Carousel } from 'antd'
import { AlbumWrapper } from './style'

export default memo(function NewAlbum() {
    const dispatch = useDispatch()
    const state = useSelector(
        state => ({
            newAlbums: state.getIn(['recommend', 'newAlbums'])
        }),
        shallowEqual
    )
    const pageRef = useRef()
    useEffect(() => {
        dispatch(getNewAlbumAction())
    }, [dispatch])

    return (
        <AlbumWrapper>
            <ThemeHeaderRCM title='新碟上架' />
            <div className='content'>
                <button className='arrow arrow-left sprite_02' onClick={e => pageRef.current.prev()}></button>
                <div className='album'>
                    <Carousel dots={false} ref={pageRef}>
                        {[0, 1].map(item => {
                            return (
                                <div className='page' key={item}>
                                    {state.newAlbums
                                        .slice(0, 10)
                                        .slice(item * 5, (item + 1) * 5)
                                        .map(iten => {
                                            return <AlbumCover key={iten.id} info={iten} />
                                        })}
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
                <button className='arrow arrow-right sprite_02' onClick={e => pageRef.current.next()}></button>
            </div>
        </AlbumWrapper>
    )
})
