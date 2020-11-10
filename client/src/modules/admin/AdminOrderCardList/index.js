import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card } from 'antd'

import { AdminOrderCard } from 'components'


import {
    showInfoOrderProduct,
} from 'store/actions'

const AdminCardList = ({ 
    orders, 
    showInfoOrderProduct, 
    infoOrderProduct, 
    }) => {

        
    return (
        <section className="list-group__order-cards">
        {
            <Card>
                {
                    orders.map( product => {
                        return <AdminOrderCard 
                            key={product._id}
                            showInfoOrderProduct={showInfoOrderProduct}         
                            infoOrderProduct={infoOrderProduct}
                            product={product}
                        />
                    })
                }
            </Card>
        }
        </section>
    )
}


AdminCardList.defaultProps = {
    showInfoOrderProduct: () => { },
    orders: [],
}

AdminCardList.propTypes = {
    orders: PropTypes.array,
    showInfoOrderProduct: PropTypes.func,
}


const mapStateToProps = (state, ownProps) => {
    return {
        orders: state.admin.admin.orders,
        infoOrderProduct: state.admin.admin.infoOrderProduct,
    }
}

const mapDispatchToProps = {
    showInfoOrderProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminCardList) 
