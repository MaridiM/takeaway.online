import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'


const Button = ({ className, children, clickAction, type}) => {
  return (
    <button 
        onClick={clickAction}
        type={type}
        className={classnames(
            'batton',
            className
        )}>
        {children}
    </button>
  );
}
Button.propTypes = {
  clickAction: PropTypes.func,
  type: PropTypes.string
}

export default  Button