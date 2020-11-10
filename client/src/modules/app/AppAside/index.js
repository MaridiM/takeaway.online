import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Logo } from 'components'

const AppAside = ({ basketCount }) => {
    const logout = true    

    return (
        <aside className="main-aside">
            <Logo className="logo col-8 mx-auto" />

            <nav>
                <ul className="main">
                    <li><NavLink to="/store">Меню</NavLink></li>
                    <li><NavLink to="/blog">Блог</NavLink></li>
                    <li><NavLink to="/card">Корзина<span className="count-card">{ basketCount === 0 ? null : basketCount }</span></NavLink></li>
                    <li><NavLink to="/contact">Контакты</NavLink></li>
                </ul>
                <hr />
                {
                    logout 
                    ?   <ul className="auth">
                            <li><NavLink to="/admin/products">Админка</NavLink></li>
                            <li><NavLink to="/logout">Выйти</NavLink></li>
                        </ul>
                    
                    :   <ul className="auth"> 
                            <li><NavLink to="/register">Регистрация</NavLink></li>
                            <li><NavLink to="/auth">Войти</NavLink></li>
                        </ul>
                }                    
                <hr />
                <ul className="soc">
                    <li>
                        <Link to="/#"><i className="fab fa-facebook-square"></i></Link>
                    </li>
                    <li>
                        <Link to="/#"><i className="fab fa-instagram"></i></Link>
                    </li>
                </ul>
            </nav>
            <footer>
                2020 <i className="far fa-copyright"></i> Take Away
            </footer>
        </aside>
    );
}

AppAside.defaultProps = {
    basketCount: null
};

AppAside.propTypes = {
    basketCount: PropTypes.number
};

const mapStateToProps = (state, ownProp) => ({
    basketCount: state.app.basket.basketCount
})

export default connect(mapStateToProps, null)(AppAside)
