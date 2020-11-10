import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { AdminProductList, AdminCardList } from 'modules'
import {
    showModalEditProduct,
    showModalSuccess,
    showInfoProduct,
    getProductId
} from 'store/actions'

const AdminList = ({
    viewCard, 
    products, 
    showInfoProduct, 
    showModalSuccess, 
    showModalEditProduct, 
    infoProduct 
    }) => {
    return (
        <>
        {
            viewCard 
                ? <AdminProductList 
                    products={products}
                    showInfoProduct={ showInfoProduct }
                    showModalSuccess={ showModalSuccess }
                    showModalEditProduct={ showModalEditProduct } 
                    /> 
                : <AdminCardList 
                    products={products}
                    showInfoProduct={ showInfoProduct }
                    showModalSuccess={ showModalSuccess }
                    showModalEditProduct={ showModalEditProduct }
                    infoProduct={infoProduct} 
                    />
        } 
        </>
    )
}


AdminList.defaultProps = {
    showModalEditProduct: () => { },
    showModalSuccess: () => { },
    showInfoProduct: () => { },
    viewCard: false,
    infoProduct: false,
    products: [],
}

AdminList.propTypes = {
    products: PropTypes.array,

    infoProduct: PropTypes.bool,
    viewCard: PropTypes.bool,
    
    showModalEditProduct: PropTypes.func,
    showModalSuccess: PropTypes.func,
    showInfoProduct: PropTypes.func,
}


const mapStateToProps = (state, ownProps) => {
    return {
        products: state.admin.admin.products,
        viewCard: state.admin.admin.viewCard,
        infoProduct: state.admin.admin.infoProduct,
        infoOrderProduct: state.admin.admin.infoOrderProduct,
    }
}

const mapDispatchToProps = {
    showModalSuccess,
    showInfoProduct,
    showModalEditProduct,
    getProductId
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminList)
