import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { App, Admin } from 'pages'

const Routes = () => {
    return (
        <Switch>
            <Route exact path={[
                '/',
                '/store',
                '/card/',
                '/blog/',
                '/product/:id',
                '/contact/',
                '/auth', 
                '/register'
            ]} component={App} />
            <Route exact path={[
                    '/admin/', 
                    '/admin/products/', 
                    '/admin/orders/', 
                    '/admin/profile/', 
                    '/admin/messages/'
                ]} 
                component={Admin}
             />
        </Switch>
    )
}

export default Routes