import React from 'react'
import { Link } from 'react-router-dom'
import { UserOutlined, MailOutlined } from '@ant-design/icons'
import { withFormik } from 'formik'
import moment from 'moment'

import { Button, FormField } from 'components'
import { validateForm } from "utils/helpers"
import { store } from 'store'
import { addProductReview } from 'store/actions'

const AppProductAddReview = ({
    id,
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
    }) => {

    return (
        <section className="add-review">
            <form>
                <FormField
                    name="fullname"
                    icon={<UserOutlined />}
                    placeholder="Ф.И.О."
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    touched={touched}
                    values={values}
                    errors={errors}
                />
                <FormField
                    name="email"
                    type="email"
                    placeholder="E-Mail"
                    icon={<MailOutlined />}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    touched={touched}
                    values={values}
                    errors={errors}
                />
                <FormField
                    className='textarea'
                    name="text"
                    placeholder="Оставить комментарий"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    touched={touched}
                    values={values}
                    errors={errors}
                    textarea
                />

                <Button type="button" clickAction={() => handleSubmit({id: id})}>Отправить</Button>
                <Link to={`/product/${id}?reviews`}>Отменить</Link>
            </form>
            <hr />
        </section>
    )
}

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        pubDate: moment().format("DD.MM.YY HH:mm"),
        fullname: "",
        email: "",
        text: "",
    }),
    validate: (values) => {
        let errors = {}
        validateForm({values, errors })
        return errors
    },
    handleSubmit: (values, {props}) => {
        store.dispatch(addProductReview(values, props.id))
    },
    displayName: "AppProductAddReview",
})(AppProductAddReview) 
