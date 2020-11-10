import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const AppBasketIcon = ({ basketCount }) => {
    return (
        <div className="shopping-card">
            <Link to="/card">
                <i className="fas fa-shopping-cart"></i>
                <span>{ basketCount === 0 ? null : basketCount}</span>
            </Link>
        </div>
    );
}

AppBasketIcon.defaultProps = {
    basketCount: null
};

AppBasketIcon.propTypes = {
    basketCount: PropTypes.number
};

const mapStateToProps = (state, ownProp) => ({
    basketCount: state.app.basket.basketCount
})

export default connect(mapStateToProps, null)(AppBasketIcon)
