import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { AppRightAside, AppProductContent, AppProductReview } from 'modules'
import { Logo, Empty } from 'components'

import { 
    showAddReview,
    addProductReview,
    getProductsInBasket
} from 'store/actions'

const  AppProduct = ({
    location,
    showAddReview,
    addProductReview,
    getProductsInBasket,
    addReview,
    product
    }) => {

    return (
        <section className="product-page">
            <section className="content">
            {!product && 
                <Empty description='Выберите товар'>
                    <Link to='/store'>В магазин</Link>
                </Empty>}
            {
                product &&
                    <section className="product">
                        <header>
                            <section className="title">
                                <h2>{ product[0].title }</h2>
                                <hr />
                                <ul className="reviews">
                                    <li><Link to="/register">Регистрация</Link></li>
                                    <li><Link to="/auth">Войти</Link></li>
                                    <li>
                                        { 
                                            location.search === '?reviews' 
                                                ? <Link to={`/product/${product[0]._id}`}
                                                    onClick={() => showAddReview(false)}>Назад</Link>
                                                : <Link to={`/product/${product[0]._id}?reviews`}
                                                    onClick={() => showAddReview(false)}>Отзывы</Link>
                                        }
                                    </li>
                                    <li>
                                        <Link to={`/product/${product[0]._id}?add-review`}
                                            onClick={() => showAddReview()}>Оставить отзыв</Link>
                                    </li>
                                </ul>
                            </section>
                            <Logo />
                        </header>
                        {
                            location.search === '?add-review' ||  location.search === '?reviews'
                                ? <AppProductReview 
                                    addReview={addReview} 
                                    search={location.search} 
                                    addProductReview={addProductReview}
                                    product={product[0]}
                                    />
                                : <AppProductContent 
                                    product={product[0]}
                                    getProductsInBasket={getProductsInBasket}
                                    /> 
                        }
                    </section>
            }
            </section>

            <AppRightAside />
            
        </section>
    )
}

AppProduct.defaultProps = {
    addReview: false,
    showAddReview: () => {},
    getProductsInBasket: () => {},
}
AppProduct.propTypes = {
    addReview: PropTypes.bool,
    showAddReview: PropTypes.func,
    getProductsInBasket: PropTypes.func
}

const mapStateToProps = (state, ownProps) => ({
    addReview: state.app.products.addReview,    
    product: state.app.products.product

})
const mapDispatchToProps = {
    showAddReview,
    addProductReview,
    getProductsInBasket
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppProduct)) 
