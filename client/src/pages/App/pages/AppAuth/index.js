import React from 'react'
import { NavLink } from 'react-router-dom'

import { AppRightAside } from 'modules'
import AuthRoutes  from 'routes/AuthRoutes'


const AppRegister = () => {

    return (
        <section className="auth-page">
                <section className="content">
                    <section className="auth-forms">
                        <header>
                            <ul>
                                <li><NavLink to="/register">Регистрация</NavLink></li>
                                <li><NavLink to="/auth">Войти</NavLink></li>
                            </ul>
                           <hr />
                        </header>

                        <AuthRoutes />

                    </section>
                </section>
                
                <AppRightAside />
                
            </section>
    )
}

export default AppRegister
