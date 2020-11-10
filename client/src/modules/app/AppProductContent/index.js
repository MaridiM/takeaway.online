import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'components'


const AppProductContent = ({ product, getProductsInBasket }) => {
    const { _id, img, title, price, text} = product
    
    return (
        <section className="product-content">
            <div className="img">
                <img src={ img } alt={ title } />
            </div>
            <section className="description">
                <p className="text">{ text }</p>
                <p className="price"><span>{ price.count }</span>{ price.currency[0] }</p>
            </section>
            <ul className="btns">
                <li><Link to='/store/'>Вернуться</Link></li>
                <li><Button clickAction={() => getProductsInBasket(_id)}>В корзину</Button></li>
            </ul>
        </section>
    )
}

export default AppProductContent
