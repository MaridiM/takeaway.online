import React from 'react';
import { withFormik } from 'formik'

// import avatar from 'assets/img/profile/avatars/avatar.jpg'
import { Button, FormField } from 'components'
import { UploadImg } from 'modules'
import { store } from 'store'
import { validateForm } from 'utils/helpers'
import { getProfileData } from 'store/actions'


const AdminProfle = ({
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    values,
    errors,
}) => {


    return (
        <div className="admin-profle">
            <div className="admin-profle__body">
                <div className="admin-profle__img">
                    {/* <Avatar avatar={avatar} size='250' />
                    <input type="file"  /> */}
                    <UploadImg name="avatar"/>

                </div>
                <div className="admin-profle__content">
                    <div className="admin-profle__content-fullname">
                        <FormField
                            name="firstname"
                            type="text"
                            placeholder="Имя"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            values={values}
                            errors={errors}
                        />
                        <FormField
                            name="middlename"
                            type="text"
                            placeholder="Отчество"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            values={values}
                            errors={errors}
                        />
                        <FormField
                            name="secondname"
                            type="text"
                            placeholder="Фамилия"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            values={values}
                            errors={errors}
                        />

                    </div>
                    <div className="admin-profle__content-contact">
                        <FormField
                            name="email"
                            type="mail"
                            placeholder="E-Mail"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            values={values}
                            errors={errors}
                        />
                        <FormField
                            name="phone"
                            type="tel"
                            placeholder="Номер телефона"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            values={values}
                            errors={errors}
                        />
                    </div>

                    <div className="admin-profle__content-password">
                        <FormField
                            name="password"
                            type="password"
                            placeholder="Изменить пароль"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            values={values}
                            errors={errors}
                        />
                        <FormField
                            name="password_2"
                            type="password"
                            placeholder="Подтвердить пароль"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            values={values}
                            errors={errors}
                        />
                    </div>

                    <Button type="button" clickAction={handleSubmit}>Сохранить</Button>

                </div>
            </div>
        </div>
    );
};

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        firstname: '',
        middlename: '',
        secondname: '',
        email: '',
        phone: '',
        password: '',
        password_2: '',

    }),
    validate: (values) => {
        let errors = {};
        validateForm({ values, errors });
        return errors;
    },
    handleSubmit: (values) => {
        store.dispatch(getProfileData(values))
    },
    displayName: "AdminProfle"
})(AdminProfle)
