import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink, Link } from "react-router-dom";


import { Avatar } from "components"

import avatar from 'assets/img/profile/avatars/avatar.jpg'

const Aside = ({ loggedIn, messages }) => {
    const [minSide, setMinSide] = useState(true)

    return (
        <aside className={!minSide ? 'aside' : 'minAside'}>
            <Avatar 
                size={minSide ? '50' : '130'} 
                avatar={avatar}
                />
                
            <ul>
                <li>
                    <NavLink to='/admin/profile'>
                        <i className="fas fa-id-card"></i>
                        { !minSide && <span>Профиль</span> } 
                    </NavLink>
                </li>
                <li><NavLink to='/admin/messages'>
                        {
                            !messages.length 
                            ? <i className="far fa-envelope-open"></i>
                            : <i className="far fa-envelope"></i>
                        }
                        { !minSide && <span>Сообщения</span> }
                        {
                            (messages.length > 0 && !minSide) && <div className="countMessages">{messages.length}</div>
                        }
                </NavLink>
                </li>
                <li>
                    <NavLink to='/admin/products'>
                        <i className="fas fa-drumstick-bite"></i>
                        { !minSide && <span>Товары</span> }
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/admin/orders'>
                        <i className="fas fa-cart-arrow-down"></i>
                        { !minSide && <span>Заказы</span> }
                    </NavLink>
                </li>
                <li>
                    <Link to='/'>
                        <i className="fas fa-store-alt"></i>
                        { !minSide && <span>Магазин</span> }
                    </Link>
                </li>
                <li> {
                        !loggedIn 
                        ? <NavLink to="/admin/login"><i className="fas fa-sign-out-alt"></i>
                                    { !minSide && <span>Войти</span> }
                            </NavLink>
                        : <NavLink to='/admin/logout'><i className="fas fa-sign-out-alt"></i>
                                    { !minSide &&  <span>Выйти</span> }
                            </NavLink>
                    }
                </li>
            </ul>
            <footer className="changeStyleAside">
                {   minSide
                        ? <i className="fas fa-angle-double-right" onClick={() => setMinSide(!minSide)}></i>
                        : <i className="fas fa-angle-double-left" onClick={() => setMinSide(!minSide)}></i>
                }
            </footer>
        </aside>
    )
}
Aside.defaultProps = {
    loggedIn: false,
    messages: [],
};

Aside.propTypes = {
    loggedIn: PropTypes.bool,
    messages: PropTypes.array,
    size: PropTypes.number
}


export default Aside
