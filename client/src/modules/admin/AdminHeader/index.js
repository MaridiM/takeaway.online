import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { Button, Search } from "components"

import {
    changeViewList,
    openModalFilter,
    showModalAddProduct,
} from 'store/actions'

const AdminHeader = ({ 
    viewCard, 
    changeViewList, 
    openModalFilter, 
    showModalAddProduct, 
    location 
    }) => {    
    return (
        <header className="admin-list__header">
            <section className="admin-list__header nav">
                    { 
                        location.pathname !== '/admin/orders' &&
                            <div className="nav-items">
                                <Button 
                                    className="nav-item" 
                                    clickAction={() => showModalAddProduct()}
                                    >Добавить товар
                                </Button>
                            </div>
                    }
                    { 
                        location.pathname === '/admin/orders' &&
                            <div className="nav-items">
                                <Button className="nav-item">История</Button>
                                <Button className="nav-item">За сегодня</Button>
                            </div>
                    }
                   
                <div className="nav-views">
                {
                     location.pathname !== '/admin/orders' &&
                        <Button 
                            className={classNames(
                                'nav-views-item', 
                                !viewCard || 'active'
                            )}
                            clickAction={changeViewList}>
                                <i className="fas fa-th-list"></i>
                        </Button>
                }
                    
                {
                     location.pathname !== '/admin/orders' &&
                        <Button 
                            className={classNames(
                                'nav-views-item',
                                viewCard || 'active'
                            )}
                            clickAction={changeViewList}>
                                <i className="fas fa-th"></i>
                        </Button>
                }
                </div>
            </section>
            <Search openModalFilter={openModalFilter} />
        </header>
    )
}

AdminHeader.defaultProps = {
    changeViewList: () => { },
    openModalFilter: () => { },
    showModalAddProduct: () => { },
    viewCard: false,
}

AdminHeader.propTypes = {
    viewCard: PropTypes.bool,
    changeViewList: PropTypes.func,
    openModalFilter: PropTypes.func,
    showModalAddProduct: PropTypes.func,
}


const mapStateToProps = (state, ownProps) => {
    return {
        viewCard: state.admin.admin.viewCard,
        infoOrderProduct: state.admin.admin.infoOrderProduct,
    }
}

const mapDispatchToProps = {
    changeViewList,
    openModalFilter,
    showModalAddProduct,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminHeader))
