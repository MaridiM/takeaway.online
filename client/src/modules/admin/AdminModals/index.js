import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'


import { Modal, AdminAddProductModal } from 'modules'
import { ModalFilter } from 'components'

import {
    openModalFilter,
    showModalAddProduct,
    showModalContactWith,
    showModalSuccess,
    deleteProduct,
} from 'store/actions'

const AdminModals = ({ 
    showModalContactWith,
    showModalAddProduct,
    showModalSuccess,
    modalFilter,
    openModalFilter,
    modalContactWith,
    modalAddPrdoduct,
    modalSuccess,
    orderProduct,
    location,
    product,
    deleteProduct
    }) => {
    return (
        <>
            {
                modalContactWith &&
                <Modal
                    header="Отправить сообщение"
                    successBtn="Отправить"
                    cancelFunc={showModalContactWith}
                >
                    <div className="input-group">
                        <input type="text" placeholder="Тема" />
                        <input type="text" placeholder="E-Mail" />
                        <textarea type="text" placeholder="Сообщение"></textarea>
                    </div>
                </Modal>
            }
            { modalAddPrdoduct && <AdminAddProductModal showModalAddProduct={showModalAddProduct} />}
            {
                (modalSuccess && location.pathname === "/admin/orders") &&
                <Modal
                    header="Удаление заказа"
                    successBtn="Удалить"
                    cancelFunc={showModalSuccess}
                >
                    Удалить заказ № {orderProduct.orderNum} без возможности вернуть его!
                </Modal>
            }
            {
                (modalSuccess && location.pathname === "/admin/products") &&
                <Modal
                    cancelFunc={showModalSuccess}
                    header="Удаление товара"
                    successBtn="Удалить"
                    successFunc={deleteProduct}
                    id={product._id}
                    >
                    Удалить продукт № {product._id.slice(0, 8)} без возможности вернуть его!
                </Modal>
            }
            {modalFilter && <ModalFilter openModalFilter={openModalFilter} />}
        </>
    )
}

AdminModals.defaultProps = {
    openModalFilter: () => { },
    showModalAddProduct: () => { },
    showModalContactWith: () => { },
    showModalSuccess: () => { },
    deleteProduct: () => { },
    modalFilter: false,
    modalSuccess: false,
    modalAddPrdoduct: false,
    modalContactWith: false,
    orderProduct: {},
    product: {}
}

AdminModals.propTypes = {
    orderProduct: PropTypes.object,
    product: PropTypes.object,
    
    modalFilter: PropTypes.bool,
    modalSuccess: PropTypes.bool,
    modalAddPrdoduct: PropTypes.bool,
    modalContactWith: PropTypes.bool,
    
    openModalFilter: PropTypes.func,
    showModalContactWith: PropTypes.func,
    showModalSuccess: PropTypes.func,
    showModalAddProduct: PropTypes.func,
    deleteProduct: PropTypes.func,
}


const mapStateToProps = (state, ownProps) => ({
        modalFilter: state.admin.admin.modalFilter,
        modalSuccess: state.admin.admin.modalSuccess,
        modalAddPrdoduct: state.admin.admin.modalAddPrdoduct,
        modalContactWith: state.admin.admin.modalContactWith,
        product: state.admin.admin.product,
})

const mapDispatchToProps = {
    openModalFilter,
    showModalAddProduct,
    showModalSuccess,
    showModalContactWith,
    deleteProduct    

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminModals)) 
