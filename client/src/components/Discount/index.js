import React from 'react'
import PropTypes from 'prop-types'


const Discount = ({count, type}) => {
    return (
        <section className="discount">
            <img src="/assets/img/products/discount.png" alt="Take Away - Закажи еду на дом онлайн!" />
            <p><span>{count}</span>{type}</p>
        </section>
    )
}

Discount.defaultProps = {
    count: null,
    type: ''
}

Discount.propTypes = {
    count: PropTypes.number,
    type: PropTypes.string
}
export default Discount 
