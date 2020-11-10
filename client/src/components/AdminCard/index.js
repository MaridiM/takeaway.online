import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Button } from 'components'

const AdminCard = ({ 
    product, 
    showInfoProduct, 
    showModalEditProduct, 
    showModalSuccess, 
    infoProduct 
    }) => {

    const { _id, img, title, text,  price } = product
    return (
        <div className={classNames(
                "card", 
                infoProduct && 'showInfo '
            )} >           
            <div className="card__img">
                <img src={ img } alt={ title } />
            </div>
            <div className="card__body">
                <h1 className="card__body-title">{ title }</h1>
                <div className="card__body-text">
                    { text }
                </div>
            </div>
            <div className="card__footer">
                <div className="card__footer-price">{price.count}{price.currency[0] || price.currency[1]}</div>
                <section className="card__footer-btns">
                    <Button 
                        className="btn"
                        clickAction={() => showInfoProduct(_id, true) }>
                        <i className="fas fa-info"></i>
                    </Button>
                    <Button 
                        className="btn"
                        clickAction={ () => showModalEditProduct(_id) }>
                        <i className="far fa-edit"></i>
                    </Button>
                    <Button 
                        className="btn" 
                        clickAction={ () => showModalSuccess(_id) }>
                        <i className="far fa-trash-alt"></i>
                    </Button>
                </section>
            </div>
        </div> 
    )
}

AdminCard.defaultProps = {
    product: {},
    infoProduct: false,
    showInfoProduct: () => {},
    showModalSuccess: () => {},
    showModalEditProduct: () => {},
};

AdminCard.propTypes = {
    product: PropTypes.object,
    infoProduct: PropTypes.bool,
    showInfoProduct: PropTypes.func,
    showModalSuccess: PropTypes.func,
    showModalEditProduct: PropTypes.func,
};


export default AdminCard
