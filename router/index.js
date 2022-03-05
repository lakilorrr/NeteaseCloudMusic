import Discover from '@/pages/discover'
import Recommend from '@/pages/discover/children-pages/recommend'
import Toplist from '@/pages/discover/children-pages/toplist'
import Playlist from '@/pages/discover/children-pages/playlist'
import Artist from '@/pages/discover/children-pages/artist'
import Album from '@/pages/discover/children-pages/album'
import Player from '@/pages/player'

import { Redirect } from 'react-router'

const routers = [
    {
        path: '/',
        exact: true,
        render: () => <Redirect to='/discover' />
    },
    {
        path: '/discover',
        component: Discover,
        routes: [
            {
                path: '/discover',
                exact: true,
                render: () => <Redirect to='/discover/recommend' />
            },
            {
                path: '/discover/recommend',
                component: Recommend
            },
            {
                path: '/discover/playlist',
                component: Playlist
            },
            {
                path: '/discover/toplist',
                component: Toplist
            }
        ]
    }
]

export default routers
