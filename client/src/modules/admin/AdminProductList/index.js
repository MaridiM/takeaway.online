import React from 'react'
import PropTypes from 'prop-types'

import { AdminProductListItem } from 'components'


const AdminProductList = ({ products, showInfoProduct, showModalEditProduct, showModalSuccess }) => {
    
    return (
        <ul className="list-group__list">
            {
                products.map( product => {
                    return <AdminProductListItem 
                        key={product._id}
                        product={product}
                        showInfoProduct={showInfoProduct}
                        showModalEditProduct={showModalEditProduct}
                        showModalSuccess={showModalSuccess}
                    />
                })
            }
        </ul>
    )
}

AdminProductList.defaultProps = {
    product: [],
    showInfoProduct: () => {},
    showModalSuccess: () => {},
    showModalEditProduct: () => {}
};

AdminProductList.propTypes = {
    product: PropTypes.array,
    showInfoProduct: PropTypes.func,
    showModalSuccess: PropTypes.func,
    showModalEditProduct: PropTypes.func
};


export default AdminProductList 
