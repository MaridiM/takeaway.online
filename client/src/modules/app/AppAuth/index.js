import React from 'react'
import { MailOutlined, LockOutlined} from '@ant-design/icons'
import { Form, Button } from "antd"
import { withFormik } from 'formik'


import { FormField } from 'components'
import { validateForm } from "utils/helpers"

const AppAuth = ({
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting,
  }) => {

    return (
        <Form onSubmit={handleSubmit} className="login">
            <h3>Авторизация</h3>
            <FormField
                name="email"
                icon={<MailOutlined />}
                placeholder="E-Mail"
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
                errors={errors}
                values={values}
                />
            <FormField
                name="password"
                icon={<LockOutlined />}
                placeholder="Пароль"
                type="password"
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
                errors={errors}
                values={values}
                />
            <Form.Item>
                {isSubmitting && !isValid && <span>Ошибка!</span>}
                <Button
                    disabled={isSubmitting}
                    clickAction={handleSubmit}
                    className="btn">
                    Войти
                </Button>
            </Form.Item>

        </Form>
    )
}

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validate: (values) => {
    let errors = {};

    validateForm({values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {
      console.log(values)
  },
  displayName: "AppAuth",
})(AppAuth)
