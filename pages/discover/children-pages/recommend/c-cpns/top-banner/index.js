import React, { memo, useEffect, useRef, useCallback, useState } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Carousel } from 'antd'

import { getTopBannerAction } from '../../store/actionCreators'

import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

export default memo(function TopBanner() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const state = useSelector(
        state => ({
            topBanners: state.getIn(['recommend', 'topBanners'])
        }),
        shallowEqual
    )
    const dispatch = useDispatch()

    const bannerRef = useRef()

    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])
    const bannerChange = useCallback(current => {
        setCurrentIndex(current)
    }, [])

    const bgImage = state.topBanners[currentIndex] && state.topBanners[currentIndex].imageUrl + '?imageView&blur=40x20'

    return (
        <BannerWrapper bgImage={bgImage}>
            <div className='banner wrap-v2'>
                <BannerLeft>
                    <Carousel effect='fade' autoplay ref={bannerRef} afterChange={bannerChange}>
                        {state.topBanners.map((item, index) => {
                            return (
                                <div className='banner-item' key={item.url}>
                                    <img className='image' src={item.imageUrl} alt={item.typeTitle} />
                                </div>
                            )
                        })}
                    </Carousel>
                    ,
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className='btn left' onClick={e => bannerRef.current.prev()}></button>
                    <button className='btn right' onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})
