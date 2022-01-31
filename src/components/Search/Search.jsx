import React from 'react'
import SearchIcon from '../../images/icons/search2.svg'
import Close from '../../images/icons/close.svg'

import './Search.scss'

const Search = (props) => {
  return (
    <div>
      <div
        className="overlay animate__animated animate__fadeIn animate__faster"
        onClick={props.handleClose}
      ></div>
      <div className="searchContainer">
        <div className="searchBox animate__animated animate__fadeIn">
          <img src={SearchIcon} alt="search" />
          <input type="text" placeholder="Search Afen" />
        </div>
        <div className="closeBox">
          <img src={Close} alt="close" onClick={props.handleClose} />
        </div>
      </div>
    </div>
  )
}

export default Search
