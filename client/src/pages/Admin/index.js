import React from 'react'

import { Aside } from 'modules'
import  AdminRoutes  from 'routes/AdminRoutes'



const Admin = () => {
    return (
        <div className="admin-wrapper">
            <Aside
                messages={[]}
                loggedIn
            />
            <main className="admin-content">
                <AdminRoutes />
            </main>
        </div>
    )
}

export default Admin;
