import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import routers from './router'
import store from './store'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import PlayerBar from './pages/player/player-bar'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <AppHeader />
                {renderRoutes(routers)}
                <AppFooter />
                <PlayerBar />
            </HashRouter>
        </Provider>
    )
})
