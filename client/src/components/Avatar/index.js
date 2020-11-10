import React from 'react'
import PropTypes from 'prop-types'


const Avatar = ({ avatar, size, fontSize}) => {

    return (
        <div
            className="avatar" 
            style={{
                minWidth: `${size}px`,
                minHeight: `${size}px`,
                backgroundImage: `url(${avatar})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${size}px`,
                backgroundPosition: '50%',
            }}
            >
            {   !avatar
                    ? size > 50
                        ? <i className="fas fa-user" style={{ fontSize: `${fontSize}px` }}></i>
                        : <i className="fas fa-user" ></i>
                    : null
            }
        </div>
    )
}
Avatar.defaultProps = {
    avatar: null,
    size: '130',
    fontSize: '100'
};

Avatar.propTypes = {
    avatar: PropTypes.string,
    size: PropTypes.string,
    fontSize: PropTypes.string
}


export default Avatar 
