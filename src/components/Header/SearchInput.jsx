import { useState } from 'react'


function SearchInput() {
    return (
        <>
        <label for="search-field"></label>
        <input id="search-field" name="search-input" class="header__search-input">Search</input>
        </>
    )
}

export default SearchInput