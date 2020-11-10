import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components'

const AdminProductListItem = ({product, showInfoProduct, showModalEditProduct, showModalSuccess }) => {
    const { _id, img, title, text, price } = product
    return (
        <li className="list-group__list-item">
            <div className="list-group__list-item__img">
                <img src={ img } alt={ title } />
            </div>
            <section className="list-group__list-item__content">
                <div className="list-group__list-item__content-body">
                    <h4 className="list-group__list-item__content-title">{ title } </h4>
                    <span className="list-group__list-item__content-text">
                    { text }
                    </span>
                </div>
                <div className="list-group__list-item__content-price">{ price.count }{price.currency[0]}</div>
            </section>
            <section className="list-group__list-item__btns">
                <Button 
                    className="list-group__list-item__btns btn"
                    clickAction={ () => showInfoProduct(_id, true) }>
                    <i className="fas fa-info"></i>
                </Button>
                <Button 
                    className="list-group__list-item__btns btn"
                    clickAction={() => showModalEditProduct(_id, true) }>
                    <i className="far fa-edit"></i>
                </Button>
                <Button 
                    className="list-group__list-item__btns btn"
                    clickAction={ () => showModalSuccess(_id) }>
                    <i className="far fa-trash-alt"></i>
                </Button>
            </section>
        </li>
    )
}

AdminProductListItem.defaultProps = {
    product: {},
    showInfoProduct: () => {},
    showModalSuccess: () => {},
    showModalEditProduct: () => {}
};

AdminProductListItem.propTypes = {
    product: PropTypes.object,
    showInfoProduct: PropTypes.func,
    showModalSuccess: PropTypes.func,
    showModalEditProduct: PropTypes.func
};

export default AdminProductListItem
