import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Discount, Button } from 'components'

import {
    getProductId,
    addProductInBasket,
    removeProductInBasket,
    deleteProductFromBasket
} from "store/actions"

const AppOrderCard = ({ 
    count,
    product, 
    getProductId, 
    addProductInBasket,
    removeProductInBasket,
    deleteProductFromBasket
    }) => {
    
    const {_id, img, title, price, discount,} = product

    return (
        <article className="item">
            <i className="fas fa-times close" onClick={() => deleteProductFromBasket(_id)}></i>
            <Link to={`/product/${_id}`} onClick={() => getProductId(_id)} >
                <div className="product-img">
                    <img src={ img } alt={ title } />
                </div>
                <h2>{ title }</h2>
            </Link>

            <section className="nav">
                <p className="nav-price"><span>{ price.count * count }</span>{ price.currency[0] }</p>
                <section className="nav-count">
                    <Button 
                        className="plus"
                        clickAction={() => addProductInBasket(_id)}
                        >+</Button>
                    <div className="count">{ count }</div>
                    <Button 
                        className="minus"
                        clickAction={() => removeProductInBasket(_id)}
                        >-</Button>
                </section>
                {discount.status && <Discount count={ discount.count } type={ discount.type } />} 
            </section>
        </article>
    );
};

AppOrderCard.defaultProps = {
    product: {},
    getProductId: () => {},
    addProductInBasket: () => {},
    removeProductInBasket: () => {},
    count: null,
};

AppOrderCard.propTypes = {
    product: PropTypes.object,
    getProductId: PropTypes.func,
    addProductInBasket: PropTypes.func,
    removeProductInBasket: PropTypes.func,
    deleteProductFromBasket: PropTypes.func,
    count: PropTypes.number
};

const mapDispatchToProps = ({
    getProductId,
    addProductInBasket,
    removeProductInBasket,
    deleteProductFromBasket
})

export default connect(null, mapDispatchToProps)(AppOrderCard) 
