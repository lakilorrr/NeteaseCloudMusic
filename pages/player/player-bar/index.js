import React, { memo, useEffect, useRef, useCallback, useState } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils'

import { Slider, message } from 'antd'

import { getSongDetailAction, changePlayOrderAction, changePrevAndNextButton, changeLrcIndexAction } from '../store/actionCreators'

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'
import { NavLink } from 'react-router-dom'

export default memo(function PlayerBar() {
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isChanging, setIsChanging] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    const state = useSelector(
        state => ({
            currentSong: state.getIn(['player', 'currentSong']),
            playOrder: state.getIn(['player', 'playOrder']),
            lrcList: state.getIn(['player', 'lrcList']),
            lrcIndex: state.getIn(['player', 'lrcIndx'])
        }),
        shallowEqual
    )
    const dispatch = useDispatch()

    const audioRef = useRef()
    useEffect(() => {
        dispatch(getSongDetailAction(1413863166))
    }, [dispatch])
    useEffect(() => {
        audioRef.current.src = getPlaySong(state.currentSong.id)
        audioRef.current
            .play()
            .then(res => {
                setIsPlaying(true)
            })
            .catch(err => {
                setIsPlaying(false)
            })
    }, [state.currentSong])

    const picUrl = (state.currentSong.al && state.currentSong.al.picUrl) || ''
    const singerName = (state.currentSong.ar && state.currentSong.ar[0].name) || '未知歌手'
    const duration = state.currentSong.dt || 0
    const showDuration = formatDate(duration, 'mm:ss')
    const showCurrentTime = formatDate(currentTime, 'mm:ss')

    const playMusic = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play()
        setIsPlaying(!isPlaying)
    }

    const timeUpdate = e => {
        const currentTime = e.target.currentTime
        if (!isChanging) {
            setCurrentTime(currentTime * 1000)
            setProgress(((currentTime * 1000) / duration) * 100)
        }
        let i = 0
        for (; i < state.lrcList.length; i++) {
            let lrcTime = state.lrcList[i].total
            if (currentTime * 1000 < lrcTime) {
                break
            }
        }
        if (state.lrcIndex !== i - 1) {
            dispatch(changeLrcIndexAction(i - 1))
            const lrc = state.lrcList[i - 1] && state.lrcList[i - 1].lrcLine
            message.open({
                key: 'lrc',
                content: lrc,
                duration: 0
            })
        }
    }

    const handleMusicEnded = () => {
        if (state.playOrder === 2) {
            audioRef.current.currentTime = 0
            audioRef.current.play()
        } else {
            dispatch(changePrevAndNextButton(1))
        }
    }

    const changeMusic = tag => {
        dispatch(changePrevAndNextButton(tag))
    }

    const changePlayOrder = () => {
        let order = state.playOrder + 1
        if (order > 2) {
            order = 0
        }
        dispatch(changePlayOrderAction(order))
    }

    const sliderChange = useCallback(
        value => {
            setProgress(value)
            setCurrentTime((value / 100) * duration)
            setIsChanging(true)
        },
        [duration]
    )
    const sliderAfterChange = useCallback(
        value => {
            audioRef.current.currentTime = ((value / 100) * duration) / 1000
            setCurrentTime((value / 100) * duration)
            setIsChanging(false)
        },
        [duration]
    )
    return (
        <PlaybarWrapper className='sprite_playbar'>
            <div className='content wrap-v2'>
                <Control isPlaying={isPlaying}>
                    <button className='sprite_playbar prev' onClick={e => changeMusic(-1)}></button>
                    <button className='sprite_playbar play' onClick={e => playMusic()}></button>
                    <button className='sprite_playbar next' onClick={e => changeMusic(1)}></button>
                </Control>
                <PlayInfo>
                    <div className='image'>
                        <NavLink to='/discover/player'>
                            <img src={getSizeImage(picUrl, 35)} alt='' />
                        </NavLink>
                    </div>
                    <div className='info'>
                        <div className='song'>
                            <span className='song-name'>{state.currentSong.name}</span>
                            <a href='/#' className='singer-name'>
                                {singerName}
                            </a>
                        </div>
                        <div className='progress'>
                            <Slider value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange} />
                            <div className='time'>
                                <span className='now-time'>{showCurrentTime}</span>
                                <span className='divider'>/</span>
                                <span className='duration'>{showDuration}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator order={state.playOrder}>
                    <div className='left'>
                        <button className='btn sprite_playbar favor'></button>
                        <button className='btn sprite_playbar share'></button>
                    </div>
                    <div className='right sprite_playbar'>
                        <button className='btn sprite_playbar volume'></button>
                        <button className='btn sprite_playbar loop' onClick={e => changePlayOrder()}></button>
                        <button className='btn sprite_playbar playlist'></button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={e => timeUpdate(e)} onEnded={e => handleMusicEnded()} />
        </PlaybarWrapper>
    )
})
