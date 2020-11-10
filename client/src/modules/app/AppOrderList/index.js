import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { AppOrderCard, Empty } from 'components'

const AppOrderList = ({ basket }) => {
    return (
        <section className="items">
            { 
                !basket.length && 
                    <Empty description='Ваша корзина пуста'>
                        <Link to='/store'>В магазин</Link>
                    </Empty>
            }
            {
                basket.map( product => {
                    return <AppOrderCard 
                        key={product[0]._id}
                        product={product[0]}
                        count={product.length}
                    />
                })
            } 
        </section>
    )
}

AppOrderCard.defaultProps = {
    basket: [],
};

AppOrderCard.propTypes = {
    basket: PropTypes.array,
};

const mapStateToProps = (state, ownProp) => ({
    basket: state.app.basket.basket,
})



export default connect(mapStateToProps, null)(AppOrderList)
