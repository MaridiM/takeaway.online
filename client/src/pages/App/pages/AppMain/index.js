import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import { getProducts, getCategories, getCategory} from 'store/actions'
import { AppCategories, AppCards, AppPagination } from 'modules'

const AppMain = ({ 
    getProducts, 
    getCategories, 
    products, 
    productsCategory, 
    getCategory, 
    category 
    }) => {

    useEffect(() => {
        getProducts()
        getCategories()
    }, [getProducts, getCategories])

    return (
        <div className="main-page">
            <div className="content">
                <AppCategories 
                    categories={productsCategory}
                    category={category}
                    getCategory={getCategory}
                    />
                <section className="content-cards">
                    <AppCards 
                        products={ products } 
                        category={category}
                    />
                </section>
                <AppPagination />
            </div>
        </div>
    )
}

AppMain.defaultProps = {
    getProducts: () => {},
    getCategories: () => {},
    getCategory: () => {},
    products: [],
    productsCategory: [],
    category: 'all'
}

AppMain.propTypes = {
    getCategories: PropTypes.func,
    getProducts: PropTypes.func,
    getCategory: PropTypes.func,
    products: PropTypes.array,
    productsCategory: PropTypes.array,
    category: PropTypes.string
}

const mapStateToProps = (state, ownProp) => ({
    products: state.app.products.products,
    productsCategory: state.app.categories.categories.productsCategory,
    category: state.app.categories.category
})

const mapDispatchToProps = {
    getProducts,
    getCategories,
    getCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMain)
