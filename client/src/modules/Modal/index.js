import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Button } from 'components'

const Modal = ({ id, header, successBtn, children, cancelFunc, successFunc, successLink, link}) => {


    return (
        <div className="modal__wrapper">
            <div className="modal__window">
                <i 
                    className="fas fa-times close"  
                    onClick={() => cancelFunc(false)}>
                </i> 
                <header className="modal__header">{ header }</header>
                <div className="modal__body">
                    { children }
                </div>
                <footer className="modal__footer">
                    {successLink && <Link to={link} onClick = {() => cancelFunc(false)}>{ successLink }</Link>}
                    {successBtn && <Button clickAction={() => {
                        cancelFunc(false)
                        return successFunc(id)}
                    }>{ successBtn }</Button>}
                    <Button clickAction={() => cancelFunc(false)}>Отменить</Button>
                </footer>
            </div>
        </div>
    )
}

Modal.defaultProps = {
    header: null,
    successBtn: null,
    successLink: '',
    link: '',
    showModalWindow: () => {},
    cancelFunc: () => {},
    successFunc: () => {},
}

Modal.propTypes = {
    header: PropTypes.string,
    successBtn: PropTypes.string,
    successLink: PropTypes.string,
    link: PropTypes.string,
    showModalWindow: PropTypes.func,
    cancelFunc: PropTypes.func,
    successFunc: PropTypes.func,
}

export default Modal 
