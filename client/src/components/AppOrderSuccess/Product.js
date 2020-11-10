import React from 'react'


const Product = ({ id, count, product}) => {
    const {title, price, img} = product
    return (
        <li className='order-success__item'>
            <span className='order-success__item-img'>
                <img src={img} alt={title}/>
            </span>
            <span className='order-success__item-title'>{ title }</span>
            <span className='order-success__item-count'>{ count }</span>
            <span className='order-success__item-price'>{price.count * count}{price.currency[0]}</span>
        </li>
    )
}

export default Product
