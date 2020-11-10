import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Discount, Button } from 'components'

import {
    getProductId,
    getProductsInBasket
} from "store/actions"

const AppCard = ({
    product,
    getProductId,
    getProductsInBasket
}) => {
    const { _id, title, img, discount, price } = product

    return ( 
        <article className="item">
            <Link 
                to={`/product/${_id}`}
                onClick={() => getProductId(_id)} >
                <h2 className="item-title">{ title }</h2> 
                <div className="item-img">
                    <img src={ img } alt={ title }/> 
                </div> 
            </Link> 
            <section className="item-nav">
            <Button 
                className = "item-nav-add active"
                clickAction={() => getProductsInBasket(_id)} >
                В корзину 
            </Button> 
            <p className="item-nav-price"><span>{ price.count }</span>{ price.currency[0]}</p>
            </section> 
            { 
                discount.status && 
                    <Discount 
                        count={ discount.count } 
                        type={ discount.type } /> 
            }  
        </article>
    )
}


AppCard.defaultProps = {
    data: {},
    getProductId: () => {},
    getProductsInBasket: () => {}
}

AppCard.propTypes = {
    data: PropTypes.object,
    getProductId: PropTypes.func,
    getProductsInBasket: PropTypes.func
}

const mapDispatchToProps = ({
    getProductId,
    getProductsInBasket
})

export default connect(null, mapDispatchToProps)(AppCard)