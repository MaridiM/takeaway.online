import React from 'react'
import { Button, Avatar } from 'components'

const AdminContactAuthorModal = ({ showModalContact }) => {
    return (
        <div className="modal-contact-author">
                <div className="modal-contact-author__window">
                    <h4 className="modal-contact-author__title">Василькова Валентина</h4>
                    <div className="modal-contact-author__body">
                        <Avatar />
                        <ul>
                            <li>vasilkova-valentina@gmail.com</li>
                            <li>+380978785533</li>
                            <li>
                                {/* <Button className='btn-nav'>Связаться</Button> */}
                                <Button 
                                    className='btn-nav' 
                                    clickAction={() => showModalContact(false)}>
                                    Закрыть
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default AdminContactAuthorModal 
