import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import { AppCard } from 'components'
import { getProducts } from 'store/actions'

const AppRightAside = ({
    getProducts,
    products
}) => {
    useEffect(() => {
        getProducts()
    }, [getProducts])


    return (
        <section className="right-side">
            {
                products.map(product => {
                    return <AppCard 
                        key={ product._id }
                        product={ product }
                    />
                })
            }
        </section>
    )
}

AppRightAside.defaultProps = {
    product: {}
};

AppRightAside.propTypes = {
    product: PropTypes.object
};

const mapStateToProps = (state, ownProp) => ({
    products: state.app.products.products
})

const mapDispatchToProps = {
    getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRightAside)
