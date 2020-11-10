import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { AdminMessage, AdminContactAuthorModal } from 'components'

import { 
    showAnswerForm,
    showAnswers,
    showModalContact
} from 'store/actions'

const AdminMessages = ({
    answerForm,
    answers,
    modalContact,
    showAnswerForm,
    showAnswers,
    showModalContact
}) => {

    return (
        <div className="admin-messages">

            { modalContact && <AdminContactAuthorModal showModalContact={showModalContact} /> }

            <div className="admin-messages__body">
                <AdminMessage
                    showAnswerForm={showAnswerForm}
                    showModalContact={showModalContact}
                    answerForm={answerForm}
                    showAnswers={showAnswers}
                    answers={answers}
                />
            </div>
        </div>
    );
};

AdminMessage.defaultProps = {
    answerForm: false,
    answers: false,
    modalContact: false,
    showAnswerForm: () => {},
    showAnswers: () => {},
    showModalContact: () => {},

}
AdminMessage.propTypes = {
    answerForm: PropTypes.bool,  
    answers: PropTypes.bool,
    modalContact: PropTypes.bool,
    showAnswerForm: PropTypes.func,
    showAnswers: PropTypes.func,
    showModalContact: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
    answerForm: state.admin.admin.answerForm,
    answers: state.admin.admin.answers,
    modalContact: state.admin.admin.modalContact,
})

const mapDispatchToProps = {
    showAnswerForm,
    showAnswers,
    showModalContact
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminMessages)