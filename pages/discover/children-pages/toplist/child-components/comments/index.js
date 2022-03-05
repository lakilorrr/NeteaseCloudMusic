import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSizeImage } from '@/utils/format-utils'
import { getTopCommentAction, getNewestCommentAction } from '../../store/actionCreators'
import { CommentWrapper } from './style'
const Comment = memo(() => {
    const state = useSelector(
        state => ({
            currentid: state.getIn(['Ranking', 'currentid']),
            topcomments: state.getIn(['Ranking', 'topcomments']),
            newestcomments: state.getIn(['Ranking', 'newestcomments'])
        }),
        shallowEqual
    )
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTopCommentAction(state.currentid))
        dispatch(getNewestCommentAction(state.currentid, 0))
    }, [dispatch, state.currentid])

    const topcomments = state.topcomments.comments || []
    const newestcomments = state.newestcomments.comments || []

    const commentFrag = item => {
        return (
            <div className='comment-item'>
                <div className='avatar'>
                    <img src={getSizeImage(item.user.avatarUrl, 50)} alt='' />
                </div>
                <div className='comment-wrap'>
                    <div>
                        <div className='comment-cnt'>
                            <a href='' className='user-name'>
                                {item.user.nickname}
                            </a>
                            {`：${item.content}`}
                        </div>
                    </div>
                    {item.beReplied !== [] && item.beReplied !== null ? (
                        item.beReplied[0] ? (
                            item.beReplied[0].content ? (
                                <div className='replied-cnt'>
                                    <a href='' className='user-name'>
                                        {item.beReplied[0].user.nickname}
                                    </a>
                                    {`：${item.beReplied[0].content}`}
                                </div>
                            ) : (
                                <div className='replied-cnt'>该评论已删除</div>
                            )
                        ) : null
                    ) : null}
                    <div className='comment-bottom'>
                        <div className='time'>{item.timeStr}</div>
                        <a href='' className='like'>
                            <i className='zan sprite_icon3'></i>
                            {item.likedCount ? `(${item.likedCount})` : ''}
                        </a>
                        <span className='sep'>|</span>
                        <a href='' className='reply'>
                            回复
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <CommentWrapper>
            <div>
                <div className='title'>
                    <h3>评论</h3>
                    <span className='c-num-bar'>{`共${state.newestcomments.total}条评论`}</span>
                </div>
            </div>
            <div className='comment-box'>
                <div className='comments'>
                    <h3 className='head-title'>精彩评论</h3>
                    {topcomments.map((item, idx) => {
                        return commentFrag(item)
                    })}
                    <br />
                    <br />
                    <h3 className='head-title'>{`最新评论(${state.newestcomments.total})`}</h3>
                    {newestcomments.map((item, idx) => {
                        return commentFrag(item)
                    })}
                </div>
            </div>
        </CommentWrapper>
    )
})

export default Comment
