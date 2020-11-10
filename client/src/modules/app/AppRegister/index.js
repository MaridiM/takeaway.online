import React from 'react'
import { Form, Button } from "antd"
import { UserOutlined, MailOutlined, PhoneOutlined, LockOutlined } from '@ant-design/icons'
import { withFormik } from "formik"


import { validateForm } from "utils/helpers"
import { FormField } from "components"


const AppRegister = ({
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting
  }) => {

    return (
      <Form onSubmit={handleSubmit} className="reg">
          <h3>Регистрация</h3>
          <FormField
              name="fullname"
              icon={<UserOutlined />}
              placeholder="Ваше имя и фамилия"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />
          
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
              name="phone"
              icon={<PhoneOutlined />}
              placeholder="Номер телефона"
              type="tel"
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

          <FormField
              name="password_2"
              icon={<LockOutlined />}
              placeholder="Повторите пароль"
              type="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />

          <Form.Item>
              { isSubmitting && !isValid && <span>Ошибка!</span> }
              <Button
                  disabled={isSubmitting}
                  clickAction={handleSubmit}
                  className="btn">
                Регистрация
              </Button>
          </Form.Item>
        </Form>
    );
};

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    password_2: "",
  }),
  validate: (values) => {
    let errors = {};
    validateForm({values, errors });
    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {
      console.log(values)
  },
  displayName: "AppRegister",
})(AppRegister)
