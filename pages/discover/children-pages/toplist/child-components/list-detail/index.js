import React, { memo } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { getSongDetailAction } from '@/pages/Player/store'
import { getSizeImage, formatMinuteSecond } from '@/utils/format-utils'
import HeaderSong from '@/components/ThemeHeaderSong/index'
import Comment from '../Comments/index'
import { ListTableWrapper } from './style'

export default memo(function ListDetail() {
    const state = useSelector(
        state => ({
            listdetail: state.getIn(['Ranking', 'listdetail'])
        }),
        shallowEqual
    )
    const dispatch = useDispatch()
    const playMusic = item => {
        dispatch(getSongDetailAction(item.id))
    }
    const tracks = state.listdetail.tracks || []

    const showArtist = song => {
        let nameArray = []
        for (let i = 0; i < song.ar.length; i++) {
            nameArray.push(song.ar[i].name)
        }
        return nameArray.join('/')
    }
    return (
        <ListTableWrapper>
            <HeaderSong />
            <div className='play-list'>
                <table>
                    <thead>
                        <tr className='header'>
                            <th className='ranking'></th>
                            <th className='title'>标题</th>
                            <th className='duration'>时长</th>
                            <th className='singer'>歌手</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tracks.map((item, index) => {
                            return (
                                <tr className='' key={item.id}>
                                    <td>
                                        <div className='rank-num'>
                                            <span className='num'>{index + 1}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='song-name'>
                                            {index < 3 ? <img src={getSizeImage(item.al.picUrl, 50)} alt='' /> : null}
                                            <span className='play sprite_table' onClick={e => playMusic(item)}></span>
                                            <span className='name text-nowrap'>{item.name}</span>
                                        </div>
                                    </td>
                                    <td className='song-time'>{formatMinuteSecond(item.dt)}</td>
                                    <td className='text-nowrap'>{showArtist(item)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Comment />
        </ListTableWrapper>
    )
})
