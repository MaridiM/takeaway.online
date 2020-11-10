import React from 'react'
import PropTypes from 'prop-types'

import { AdminCard } from 'components'

const AdminCardList = ({ products, showInfoProduct, showModalSuccess, showModalEditProduct, infoProduct }) => {

    return (
        <section className="list-group__cards">
            {
                products.map( product => {
                    return <AdminCard 
                        key={ product._id }
                        product={ product }
                        showInfoProduct={ showInfoProduct }
                        showModalSuccess={ showModalSuccess }
                        showModalEditProduct={ showModalEditProduct }
                        infoProduct={infoProduct} 

                    />
                })
            }

        </section>
    )
}

AdminCardList.defaultProps = {
    products: [],
    infoProduct: false,
    showInfoProduct: () => {},
    showModalSuccess: () => {},
    showModalEditProduct: () => {},
}

AdminCardList.propTypes = {
    products: PropTypes.array,
    infoProduct: PropTypes.bool,
    showInfoProduct: PropTypes.func,
    showModalSuccess: PropTypes.func,
    showModalEditProduct: PropTypes.func
}

export default AdminCardList 
