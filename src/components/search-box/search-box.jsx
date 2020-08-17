import React from 'react'
import './searchbox.css'
//import 'bootstrap/dist/css/bootstrap.min.css'

const SearchBox = ({handleChange, placeholder}) => {
    return(
        <div className="search">
                <input type='search' placeholder={placeholder} 
                onChange={handleChange} />
        </div>
    )
}

export default SearchBox