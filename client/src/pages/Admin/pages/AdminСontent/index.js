import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import { AdminHeader, AdminOrderInfo, AdminList, AdminOrderCardList, AdminModals } from 'modules'
import { AdminProductInfo } from 'components'

import { 
    getProducts,
    getOrders,
    showModalEditProduct,
    showModalSuccess,
    showInfoProduct,
    showInfoOrderProduct
} from 'store/actions'

const AdminСontent = ({ 
        orderProduct,
        getProducts,
        getOrders,
        product,
        location,

        showModalEditProduct,
        showModalSuccess,
        showInfoProduct,
        showInfoOrderProduct,

        infoOrderProduct,
        infoProduct,
    }) => {    
    
    useEffect(() => {
        getProducts()
        getOrders()
    }, [getProducts, getOrders])

    return (
        <div className="content">
            <AdminModals orderProduct={orderProduct} />
            <AdminHeader />
                <div className="content__content">
                    <section className="content__content list-group">
                        {
                            location.pathname === "/admin/products" &&
                                <AdminList /> 
                        }
                        { 
                            location.pathname === "/admin/orders" &&
                                <AdminOrderCardList />
                        } 
                    </section>

                    { (infoOrderProduct && location.pathname === "/admin/orders") 
                        && <AdminOrderInfo 
                                orderProduct={orderProduct} 
                                showInfoOrderProduct={showInfoOrderProduct} 
                                /> 
                    }
                    { (infoProduct && location.pathname === "/admin/products") 
                        && <AdminProductInfo 
                                product={product}
                                showInfoProduct={showInfoProduct}
                                showModalSuccess={showModalSuccess}
                                showModalEditProduct={showModalEditProduct} /> 
                    }
            </div>
        </div> 
    )
}

AdminСontent.defaultProps = {
    getProducts: () => {}, 
    getOrders: () => {}, 
    showModalAddProduct: () => {},
    showModalSuccess: () => {},
    showInfoProduct: () => {},
    showInfoOrderProduct: () => {},

    product: {},
    orderProduct: {},

    infoProduct: false,
}

AdminСontent.propTypes = {
    getProducts: PropTypes.func,
    getOrders: PropTypes.func,
    showModalSuccess: PropTypes.func,
    showInfoProduct: PropTypes.func,
    showModalAddProduct: PropTypes.func,
    showInfoOrderProduct: PropTypes.func,

    product: PropTypes.object,
    orderProduct: PropTypes.object,

    infoProduct: PropTypes.bool,
}


const mapStateToProps = (state, ownProps) => {
    return {
        orderProduct: state.admin.admin.orderProduct,
        infoProduct: state.admin.admin.infoProduct,        
        infoOrderProduct: state.admin.admin.infoOrderProduct,
        product: state.admin.admin.product
    }
}

const mapDispatchToProps = {
    getProducts,
    getOrders,
    showModalEditProduct,
    showModalSuccess,
    showInfoProduct,
    showInfoOrderProduct

}

export default connect(mapStateToProps, mapDispatchToProps)(AdminСontent)