import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withFormik } from 'formik'
import { UserOutlined, MailOutlined, CodeOutlined, HomeOutlined, PhoneOutlined } from '@ant-design/icons'

import { Button, FormField } from 'components'

import { deleteAllFromBasket, getOrderData } from 'store/actions'
import { validateForm } from "utils/helpers"
import { store } from 'store'

const AppOrderForm = ({ 
    fullPrice, 
    deleteAllFromBasket, 
    currency,
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    resetOrderForm
    }) => {    
    return (
        <section className="order">
            <h2>Оформить заказ</h2>
            <hr />
            <form className="form-wrapper" onSubmit={handleSubmit}>
                <section className="form">

                    <FormField
                        label="Ф.И.О."
                        name="fullname"
                        type="text"
                        placeholder="Ваше имя и фамилия"
                        icon={<UserOutlined />}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        values={!resetOrderForm ? values : ''}
                        errors={errors}
                    />
                    <FormField
                        label="Адрес доставки"
                        name="address"
                        type="text"
                        placeholder="Адрес доставки"
                        icon={<HomeOutlined />}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        values={!resetOrderForm ? values : ''}
                        errors={errors}
                    />
                    <FormField
                        label="E-Mail"
                        name="email"
                        type="email"
                        placeholder="E-Mail"
                        icon={<MailOutlined />}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        values={!resetOrderForm ? values : ''}
                        errors={errors}
                    />
                    <FormField
                        label="Номер телефона"
                        name="phone"
                        type="tel"
                        placeholder="Номер телефона"
                        icon={<PhoneOutlined />}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        values={!resetOrderForm ? values : ''}
                        errors={errors}
                    />
                    <FormField
                        label="Промокод"
                        name="promo"
                        type="text"
                        placeholder="aBcD123"
                        icon={<CodeOutlined />}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        values={!resetOrderForm ? values : ''}
                        errors={errors}
                    />
                </section>
                <hr />
                <div className="alert alert-secondary" role="alert">
                    Все aкционные цены учтены!
                </div>
                <hr />
                <p className="cost"><span>{fullPrice}</span>{currency || '₴'}</p>
                <section className="nav">
                    <hr />
                    <div className="btns">
                        <Link to="/store">В магазин</Link>
                        <div className="btn">
                            <div className="btn__order-cancel" onClick={() => deleteAllFromBasket() }>Отменить</div>
                            <Button type="submit">Заказать</Button>
                        </div>
                    </div>
                </section>
            </form>
        </section>
    )
}

AppOrderForm.defaultProps = {
    fullPrice: 0,
    deleteAllFromBasket: () => {},
    getOrderData: () => {},
    currency: 'UAN',
    resetOrderForm: false
}

AppOrderForm.propTypes = {
    fullPrice: PropTypes.number,
    deleteAllFromBasket: PropTypes.func,
    getOrderData: PropTypes.func,
    currency: PropTypes.string,
    resetOrderForm: PropTypes.bool,
}

const mapStateToProps = (state, ownProps) => ({
    fullPrice: state.app.basket.fullPrice,
    currency: state.app.basket.currency,
    resetOrderForm: state.app.basket.resetOrderForm,

})
const mapDispatchToProps = {
    deleteAllFromBasket,
    getOrderData
}

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        fullname: '',
        address: '',
        email: '',
        phone: '',
        promo: ''
    }),
    validate: (values) => {
        let errors = {};
        validateForm({values, errors });
        return errors;
    },
    handleSubmit: (values) => {
        console.log()
        store.dispatch(getOrderData(values))        
    },
    displayName: "AppOrderForm"
})(connect(mapStateToProps, mapDispatchToProps)(AppOrderForm)) 
