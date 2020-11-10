import React from 'react'
import PropTypes from 'prop-types'
import { Empty as EmptyBase } from 'antd'

const Empty = ({ image, size, description, children }) => {
    return (
        <EmptyBase
            image={ image}
            description={
                <span>
                   {description}
                </span>
            }
        >
            {children}
        </EmptyBase>
    )
}

EmptyBase.defaultProps = {
    image: 'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg',
    size: 100,
    description: 'Нет данных',
}

Empty.propTypes = {
    image: PropTypes.string,
    size: PropTypes.number,
    description: PropTypes.string,
}

export default Empty 
