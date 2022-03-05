import styled from 'styled-components'

export const CommentWrapper = styled.div`
    margin-top: 40px;
    .title {
        border-bottom: 2px solid #c20c0c;
        height: 33px;
        h3 {
            font-size: 20px;
            line-height: 28px;
            float: left;
            font-family: 'Microsoft Yahei';
        }
        .c-num-bar {
            float: left;
            margin: 9px 0 0 20px;
            color: #666;
        }
    }
    .comment-box {
        margin-top: 20px;
        .comments {
            .head-title {
                position: relative;
                top: 1px;
                height: 20px;
                border-bottom: 1px solid #cfcfcf;
                font-size: 100%;
                font-weight: bold;
            }
            .comment-item {
                padding: 15px 0;
                border-top: 1px dotted #ccc;
                .avatar {
                    float: left;
                    width: 50px;
                    height: 50px;
                    margin-right: -100px;
                    img {
                        vertical-align: middle;
                    }
                }
                .comment-wrap {
                    margin-left: 60px;
                    .comment-cnt {
                        width: 100%;
                        overflow: hidden;
                        line-height: 20px;
                        .user-name {
                            margin-right: 5px;
                            color: #0c73c2;
                        }
                    }
                    .replied-cnt {
                        padding: 8px 19px;
                        margin-top: 10px;
                        line-height: 20px;
                        background: #f4f4f4;
                        border: 1px solid #dedede;
                        color: #666;
                        .user-name {
                            margin-right: 5px;
                            color: #0c73c2;
                        }
                    }
                    .comment-bottom {
                        margin-top: 15px;
                        text-align: right;
                        .time {
                            float: left;
                            margin: 0 !important;
                            color: #999;
                        }
                        .like {
                            text-decoration: none;
                            color: #333;
                            .zan {
                                margin-right: 5px;
                                vertical-align: -2px;
                                margin-top: -4px;
                                width: 15px;
                                height: 14px;
                                background-position: -150px 0;
                                display: inline-block;
                                overflow: hidden;
                            }
                        }
                        .sep {
                            margin: 0 8px;
                            color: #ccc;
                        }
                        .reply {
                            color: #666;
                        }
                    }
                }
            }
        }
    }
`
