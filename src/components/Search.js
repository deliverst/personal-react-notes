import React from 'react'
import {MdSearch} from "react-icons/md";

const Search = ({handleSearchText}) => {
    return <div className={"search"}>
        <MdSearch className="searchoicons" size={'1.3em'}></MdSearch>
        <input onChange={(e)=> handleSearchText(e.target.value)} type="text" placeholder={'Type to Search...'}/>
    </div>
}

export default Search