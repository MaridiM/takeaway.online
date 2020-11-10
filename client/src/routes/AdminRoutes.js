import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { AdminСontent, AdminProfle, AdminMessages } from "pages/Admin/pages";

const AdminRoutes = () => {
    return (
        <Switch>
            <Route exact path={['/admin/orders/', '/admin/products/' ]} component={AdminСontent} />
            <Route exact path='/admin/profile/' component={AdminProfle} />
            <Route exact path='/admin/messages/' component={AdminMessages}  />
        </Switch>
    )
}

export default AdminRoutes