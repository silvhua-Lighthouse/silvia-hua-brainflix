
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
        <FormField id="search-input" name="search-input" className={searchProps.className} placeholder={searchProps.placeholder} rows="1"/>
        </>
    )
}

function AvatarDiv() {
    return (
        <>
        <div className="avatar-div"></div>
        </>
    )
}

function Header() {
    return (
        <>
        <header>
            <section>
                <img src={brainflixLogo} className="header__logo" alt="logo" />
                <div className="responsive-container">
                    <SearchInput/>
                    <AvatarDiv/>
                </div>
                <button className="header__upload-button">Upload</button>
            </section>
        </header>
        </>
    )
}

export default Header