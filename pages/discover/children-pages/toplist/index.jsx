import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getListsAction } from './store/actionCreators'
import Lists from './child-components/Lists'
import ListHeader from './child-components/list-header'
import ListDetail from './child-components/list-detail'
import { ToplistWrapper, Left, Right } from './style'

export default memo(function Toplist() {
    const dispatch = useDispatch()
    useEffect(() => dispatch(getListsAction()), [dispatch])
    return (
        <ToplistWrapper className='wrap-v2'>
            <Left>
                <Lists />
            </Left>
            <Right>
                <ListHeader />
                <ListDetail />
            </Right>
        </ToplistWrapper>
    )
})
