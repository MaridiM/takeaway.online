import React from 'react'
import classNames from 'classnames'


const Logo = ({className}) => {
    return (
        <div className={classNames(
            'img',
            className
        )}>
            <img src="/assets/img/template/logo.png" alt="Take Away - Закажи еду на дом онлайн!" />
        </div>
    )
}

export default Logo 
