import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'
import InfoOrderCard from './InfoOrderCard'

import { Button } from 'components'

const AdminOrderInfo = ({ orderProduct, showInfoOrderProduct }) => {

    return (
        <div className="info-order">
            <div className="info-order__products">
                <div className='header'>
                    <Button className="nav-btn" clickAction={() => showInfoOrderProduct(orderProduct._id, false)}>Закрыть</Button>
                </div>
                <div className="products">
                    {
                        orderProduct.products.length && orderProduct.products.map((product => {
                            return (
                                <Product 
                                    key={product[0]._id}
                                    product={product[0]}
                                    count={product.length}
                                />
                            )
                        }))
                    }
                </div>
            </div>
            <InfoOrderCard orderProduct={orderProduct} />
        </div>
    )
}

AdminOrderInfo.defaultProps = {
    orderProduct: {},
    showInfoOrderProduct: () => {},
};

AdminOrderInfo.propTypes = {
    orderProduct: PropTypes.object,
    showInfoOrderProduct: PropTypes.func,
};

export default AdminOrderInfo