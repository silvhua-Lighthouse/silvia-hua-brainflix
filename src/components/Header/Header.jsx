
import { useState } from 'react'
import brainflixLogo from '../../assets/images/BrainFlix-logo.svg'
import FormField from '../FormField/FormField'

const searchProps = {
    className: "header__search-input",
    placeholder: "Search",

}

function SearchInput(props) {
    return (
        <>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rerum sint quia velit consectetur, architecto illum ad officiis necessitatibus quisquam porro laborum cumque, quasi a soluta vitae sit. Similique, earum?</p>
        <FormField id="search-input" name="search-input" className={searchProps.className} placeholder={searchProps.placeholder} rows="1"/>
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