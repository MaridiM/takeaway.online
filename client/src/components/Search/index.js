import React from 'react'
import { Button } from 'components'
import PropTypes from 'prop-types'



const Search = ({ openModalFilter }) => {
  return (
    <section className="admin-list__header search">
      <Button className="search-filter" clickAction={openModalFilter}>
        <i className="fas fa-sliders-h"></i>
      </Button>
      
      <div className="search-group">
        <input className="search-group input" type="text" name="search" placeholder="Найти" />
        <Button className="search-group button"><i className="fas fa-search"></i></Button>
      </div>
    </section>
  );
}

Search.propTypes = {
  openModalFilter: PropTypes.func
}

export default  Search