import React from 'react'
import { connect } from 'react-redux'

import { getPaginationPage } from 'store/actions'

const AppPagination = ({getPaginationPage}) => {

    return (
        <footer>
            <div className="left" onClick={ () => getPaginationPage(-1) }><i className="fas fa-angle-double-left"></i></div>
            <div className="pages">
                <ul>
                    <li onClick={ () => getPaginationPage(-3) }><i className="far fa-circle"></i></li>
                    <li onClick={ () => getPaginationPage(-2) }><i className="far fa-circle"></i></li>
                    <li onClick={ () => getPaginationPage(-1) }><i className="far fa-circle"></i></li>
                    <li onClick={ () => getPaginationPage(0) }><i className="far fa-dot-circle active"></i></li>
                    <li onClick={ () => getPaginationPage(1) }><i className="far fa-circle"></i></li>
                    <li onClick={ () => getPaginationPage(2) }><i className="far fa-circle"></i></li>
                    <li onClick={ () => getPaginationPage(3) }><i className="far fa-circle"></i></li>
                </ul>
            </div>
            <div className="right" onClick={ () => getPaginationPage(1) }><i className="fas fa-angle-double-right"></i></div>
        </footer>
    )
}

const mapDispatchToProps = ({
    getPaginationPage
})

export default connect(null, mapDispatchToProps)(AppPagination)
