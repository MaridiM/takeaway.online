import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { AppOrderList, AppOrderForm, Modal } from 'modules'
import { AppOrderSuccess } from 'components'

import { hideModalBasketIsEmpty } from 'store/actions'

const AppShoppingCard = ({ 
    orderSuccess, 
    basketIsEmpty,
    hideModalBasketIsEmpty,
    }) => {
    return (
        <div className="shopping-card-page">
            <section className="content">
                {orderSuccess && <AppOrderSuccess/> }
                {
                    basketIsEmpty && 
                        <Modal
                            header="Пустая корзина"
                            link="/store"
                            successLink="В магазин"
                            cancelFunc={hideModalBasketIsEmpty}
                            >
                            Выберите товар из магазина и отправте заказ.
                        </Modal>
                }
                <AppOrderList />
                <AppOrderForm/>
            </section>
        </div>
    )
}
AppShoppingCard.defaultProps = {
    orderSuccess: false,
    basketIsEmpty: false,
}
AppShoppingCard.propTypes = {
    orderSuccess: PropTypes.bool,
    basketIsEmpty: PropTypes.bool,
    
}


const mapStateToProps = (state, ownProps) => ({
    orderSuccess: state.app.basket.orderSuccess,
    basketIsEmpty: state.app.basket.basketIsEmpty,
})
const mapDispatchToProps = ({
    hideModalBasketIsEmpty
})

export default connect(mapStateToProps, mapDispatchToProps)(AppShoppingCard) 