import React from 'react'

import { Button } from 'components'


const Product = ({ product, count }) =>  {
    return (
        <div className="products__item">
            <span>
                <img src={product.img} alt={product.title} />
            </span>
            <span>
                {product.title}
            </span>
            <span>
                {product.price.count * count}
                {product.price.currency[0] || product.price.currency[1]}
            </span>
            <span>
                {count}
                {product.items.type}
            </span>
            <span>
                <Button className="nav-btn">
                    <i className="fas fa-trash"></i>
                </Button>
            </span>
        </div>
    )
}

export default Product
