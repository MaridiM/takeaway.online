import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { AppRegister, AppAuth } from 'modules'


const AuthRoutes = () => {
    return (
        <Switch>
            <Route exact path='/register/' component={ AppRegister } />
            <Route exact path='/auth' component={ AppAuth } />
        </Switch>
    )
}

export default AuthRoutes