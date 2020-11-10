import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { AppBasketIcon, Button } from 'components'

const AppCategories = ({ categories, getCategory, category }) => {
    return (
        <header>
            <ul>
                {/* <li><Button className={'btn-nav'}>Назад</Button></li>  */}
                {
                    categories && categories.map( (item, index) => {
                        return (
                            <li key={index}>
                                <Button
                                    className={classnames(
                                        'btn-nav',
                                        category === item[1] && 'active'
                                    )}
                                    clickAction={() => getCategory(item[1]) }>
                                    {item[0] }
                                </Button>
                            </li> 
                        )
                    })
                }
            </ul>
            <AppBasketIcon />
        </header>
    );
};

AppBasketIcon.defaultProps = {
    categories: []
}
AppBasketIcon.propTypes = {
    categories: PropTypes.array
}

export default AppCategories;
