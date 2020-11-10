import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import { Modal } from 'modules'
import Product from './Product'
import Info from './Info'

import {
    hideOrderSuccess,
    sendOrderData,
} from 'store/actions'

const AppOrderSuccess = ({ 
    orderForm,
    hideOrderSuccess,
    sendOrderData,
    }) => {

        console.log(orderForm)

    return (
        <Modal
            header={`Заказ № ${orderForm.orderNum}`}
            successBtn='Подтвердить'
            successFunc={sendOrderData}
            cancelFunc={hideOrderSuccess}
            >
            <div className='order-success'>
                <ul className='order-success__items'>
                {
                    orderForm.products.map((product, index) => {
                        return <Product 
                            key={index}
                            id={index}
                            product={product[0]}
                            count={product.length}
                        />
                    })
                }
          
                </ul>
                <Info 
                    data={orderForm}
                />
            </div>
        </Modal>
    );
};

AppOrderSuccess.defaultProps = {
    orderForm: {},
    hideOrderSuccess: () => { },
    sendOrderData: () => { },
}
AppOrderSuccess.propTypes = {
    orderForm: PropTypes.object,
    hideOrderSuccess: PropTypes.func,
    sendOrderData: PropTypes.func,
}

const mapDispatchToProps = {
    hideOrderSuccess,
    sendOrderData,
}

const mapStateToProps = (state, ownProps) => ({
    orderForm: state.app.basket.orderForm,
})

export default connect(mapStateToProps, mapDispatchToProps)(AppOrderSuccess) 
