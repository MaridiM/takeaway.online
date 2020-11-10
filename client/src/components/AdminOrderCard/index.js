import React from 'react'
import { Card } from 'antd'
import PropTypes from 'prop-types'

import { Button } from 'components'

const AdminOrderCard = ({ product, showInfoOrderProduct, infoOrderProduct }) => {
    const { _id, dateOrder, orderNum, fullname, orderCount, price } = product
    return (
        <Card.Grid className={
            infoOrderProduct && "ant-card-grid-hoverable__info-order active"

        }>
            <header className="item__header">
                { fullname }
                <span>№{ orderNum }</span>
            </header>

            <div className="item__body">
                <span className="item__body-count">
                    {orderCount.count}
                    {orderCount.type}
                </span>
                <span className="item__body-price">
                    {price.count}
                    {price.currency}
                </span>
                <span className="item__body-date">
                    {dateOrder}
                </span>
            </div>
            <footer className="item__footer">
                <Button 
                    className="nav-btn"
                    clickAction={() => console.log(_id)}>
                    <i className="fas fa-check"></i>
                </Button>
                <Button 
                    className="nav-btn"
                    clickAction={() => showInfoOrderProduct(_id, true)}>
                    <i className="fas fa-info"></i>
                </Button>
                <Button 
                    className="nav-btn"
                    clickAction={() => console.log(_id)}>
                    <i className="fas fa-trash"></i>
                </Button>
            </footer>
        </Card.Grid>
    )
}

AdminOrderCard.defaultProps = {
    orderProduct: {},
    showInfoOrderProduct: () => {}
}
AdminOrderCard.propTypes = {
    orderProduct: PropTypes.object,
    showInfoOrderProduct: PropTypes.func
}

export default AdminOrderCard 
