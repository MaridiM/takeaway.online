import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'


import avatar from 'assets/img/profile/avatars/avatar.jpg'
import { Button, Avatar, FormField } from 'components'
import Answer from './Answer'

import { validateForm } from 'utils/helpers'
import { getMessageTextFromForm } from 'store/actions'
import { store } from 'store'

const AdminMessage = ({ 
    showModalContact, 
    showAnswerForm, 
    answerForm, 
    showAnswers, 
    answers,
    handleChange,
    handleBlur,
    values,
    errors,
    handleSubmit,
    touched
    }) => {
    return (
        <div className="admin-messages__message">
            <div className="admin-messages__message-avatar">
                <Avatar
                    // avatar={avatar}
                    fontSize={!avatar || '50'}
                    size={!avatar || '93'}
                />
            </div>
            <div className="admin-messages__message-wrapper">
                <div className="admin-messages__message-content">
                    <h5 className="admin-messages__message-username">Василькова Валентина <span>21.01.20 18:35</span></h5>
                    <p className="admin-messages__message-text">
                        Some  lorem text what u need use for this message.
                        Some  lorem text what u need use for this message.
                        Some  lorem text what u need use for this message.
                        Some  lorem text what u need use for this message.
                        Some  lorem text what u need use for this message.
                        Some  lorem text what u need use for this message.
                        Some  lorem text what u need use for this message.
                        Some  lorem text what u need use for this message.
                        Some  lorem text what u need use for this message.
                        Some  lorem text what u need use for this message.
                        Some  lorem text what u need use for this message.
                        Some  lorem text what u need use for this message.
                        Some  lorem text what u need use for this message.
                        Some  lorem text what u need use for this message.
                    </p>
                    {
                        !answerForm || 
                            <FormField 
                                name="text"
                                type="text"
                                placeholder='Ответное сообщение'
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                touched={touched}
                                values={values}
                                errors={errors}
                                textarea
                            />
                    }
                    <div className="admin-messages__message-btns">
                        { answerForm || <Button clickAction={showAnswerForm}>Ответить</Button> }
                        {!answerForm || <Button clickAction={handleSubmit}>Ответить</Button> }
                        { !answerForm || <Button clickAction={showAnswerForm}>Отменить</Button> }
                        <Button clickAction={showAnswers}>Ответы</Button>
                        <Button clickAction={ () => showModalContact(true) }>Контакты</Button>
                        <Button>Удалить</Button>
                    </div>
                </div>
                {
                    !answers || <Answer />

                }
            </div>
        </div>
            
    );
};

AdminMessage.defaultProps = {
    answerForm: false, 
    answers: false,
    showAnswerForm: () => { },
    showAnswers: () => { },
}

AdminMessage.propTypes = {
    showAnswerForm: PropTypes.func, 
    answerForm: PropTypes.bool, 
    showAnswers: PropTypes.func, 
    answers: PropTypes.bool,
};

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        text: '',

    }),
    validate: (values) => {
        let errors = {};
        validateForm({ values, errors });
        return errors;
    },
    handleSubmit: (values) => {
        store.dispatch(getMessageTextFromForm(values))
    },
    displayName: "AppOrderForm"
})(AdminMessage);
