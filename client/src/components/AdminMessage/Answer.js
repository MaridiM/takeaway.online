import React from 'react'

import avatar from 'assets/img/profile/avatars/avatar.jpg'
import { Button, Avatar } from 'components'

const Answer = () => {
    return (
        <div className="admin-messages__message-answer">
            <div className="admin-messages__message-avatar">
                <Avatar 
                    avatar={avatar} 
                    fontSize={!avatar || '50' } 
                    size={!avatar || '100'} 
                    />
            </div>
            <div className="admin-messages__message-content">
                <h5 className="admin-messages__message-username">Takeaway Admin <span>21.01.20 18:35</span></h5>
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
                <div className="admin-messages__message-btns">
                    <Button>Удалить</Button>
                </div>
            </div>
        </div>
    )
}

export default Answer
