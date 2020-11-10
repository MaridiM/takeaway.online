import React from 'react'
import { Link } from 'react-router-dom'

const AppBlog = () => {
    return (
        <div className="warning-wrapper">
            <div className="warning">
                <img src="/assets/img/errors/warning.png" alt="WARNING" />
                ВЕДЕТСЯ РАЗРАБОТКА ИНТЕРНЕТ МАГАЗИНА 
                <Link to="/store">Назад</Link>
            </div>
        </div>
    )
}

export default AppBlog 
