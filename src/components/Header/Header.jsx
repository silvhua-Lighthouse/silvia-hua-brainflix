
import { useState } from 'react'
import brainflixLogo from '../../assets/images/BrainFlix-logo.svg'
// import SearchInput from './SearchInput'

function SearchInput() {
    return (
        <>
        <input id="search-input" name="search-input" className="header__search-input" placeholder="Search"/>
        </>
    )
}

function Header() {
    return (
        <>
        <header>
            <section>
                <img src={brainflixLogo} />
                <SearchInput/>
            </section>
        </header>
        </>
    )
}

export default Header