import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { AppCard } from 'components'

const AppCards = ({ products, prev, next, category}) => {
    return (
        <div className="cards">
        {
            products
                .slice(prev, next)
                .filter(product => product.category.indexOf(category) > -1)
                    .map(product => {
                        return <AppCard
                            key={product._id}
                            product={product}
                        />
                    })
                
        }
        </div>
    );
};

AppCards.defaultProps = {
    products: [],
    prev: 0,
    next: 6,
    category: "all"
}

AppCards.propTypes = {
    products: PropTypes.array,
    prev: PropTypes.number,
    next: PropTypes.number,
    category: PropTypes.string,
}

const mapStateToProps = (state, ownProps) => ({
    prev: state.app.pagination.prev,
    next: state.app.pagination.next,
})

export default connect(mapStateToProps, null)(AppCards)
