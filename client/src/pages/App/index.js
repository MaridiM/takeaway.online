import React from 'react';
import { AppAside } from 'modules'

import AppRoutes from 'routes/AppRoutes'

const App = () => {   
    
    return (
        <div className="app-wrapper">
            <AppAside />
            <main className='app-content'>
                <AppRoutes />
            </main>
        </div>
    )
}
export default App
