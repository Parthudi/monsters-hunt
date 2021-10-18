import React from 'react'
import './searchbox.css'
//import 'bootstrap/dist/css/bootstrap.min.css'

const SearchBox = ({handleChange, placeholder}) => {
    return(
        <div className="search">
            <form >
                <input className="searchBox" type='search' placeholder={placeholder} 
                    onChange={handleChange} 
                />
            </form>
        </div>
    )
}

export default SearchBox