import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { AppMain, AppShoppingCard, AppContact, AppBlog, AppProduct, AppAuth } from 'pages/App/pages'


const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path={['/', '/store/']} component={ AppMain } />
            <Route exact path='/card/' component={ AppShoppingCard } />
            <Route exact path='/product/:id' component={ AppProduct } />
            <Route exact path='/blog/' component={ AppBlog } />
            <Route exact path='/contact/' component={ AppContact } />
            <Route exact path={['/auth', '/register']} component={AppAuth} />
        </Switch>
    )
}

export default AppRoutes